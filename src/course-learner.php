<?php

/**
 * Plugin Name: LearnPress - Course Learner
 * Plugin URI: https://github.com/LearnPress
 * Description:
 * Version: 5.9.2
 * Author: ThimPress
 * Text Domain: learnpress-course-learner
 *
 * @package LearnPress
 */
class LP_Learner {
	/**
	 * @var LP_Learner
	 */
	protected static $instance = null;

	public function __construct() {
		add_action( 'learn-press/core-api/includes', array( $this, 'api_includes' ) );
		add_filter( 'learn-press/core-api/controllers', array( $this, 'api_controllers' ) );
	}

	public function api_controllers( $controllers ) {
		$controllers = array_merge(
			$controllers,
			array(
				'LP_Rest_User',
				'LP_Rest_Course'
			)
		);

		return $controllers;
	}

	public function api_includes() {
		include_once dirname( __FILE__ ) . '/inc/rest-api/class-lp-rest-user.php';
		include_once dirname( __FILE__ ) . '/inc/rest-api/class-lp-rest-course.php';
	}

	/**
	 * @return LP_Learner
	 */
	public static function instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}

LP_Learner::instance();


function cln_get_asset_url( $url ) {
	$url = plugins_url( $url, __FILE__ );

	return learn_press_is_debug() ? add_query_arg( 'no-cache', microtime( true ), $url ) : $url;
}

function cln_enqueue_scripts() {
	$dependencies = array(
		'wp-element',
		'wp-compose',
		'wp-data',
		'wp-hooks',
		'wp-api-fetch',
		'lodash'
	);

	wp_enqueue_script( 'wp-element' );

	foreach ( $dependencies as $handle ) {
		wp_enqueue_script( $handle );
	}

	$packages         = array(
		'course-hooks'      => 'templates/hooks.js',
		'lp-utils'          => 'utils',
		'course-components' => 'components',
		'lp-blocks'         => 'blocks',
		'data-controls',
		'notices',
		'data',
		'course-user',
		'course-quiz',
		'course-lesson',
		'course-overview',
		'course-progress',
		'course-curriculum',
		'course-learner',
		'core'              => 'core',
		'course-templates'  => 'templates/build/index.js',
	);
	$loadDependencies = true;
	foreach ( $packages as $handle => $package ) {
		if ( is_numeric( $handle ) ) {
			$handle = $package;
		}

		$url = preg_match( '/.js$/', $package ) ? $package : 'assets/js/' . $package . '.js';

		wp_enqueue_script( 'lp-' . $handle, cln_get_asset_url( $url ), $loadDependencies ? $dependencies : array() );
		$loadDependencies = false;
	}

//	wp_enqueue_script( 'course-curriculum', cln_get_asset_url( 'assets/js/course-curriculum.js' ) );
//	wp_enqueue_script( 'lp-utils', cln_get_asset_url( 'assets/js/utils.js' ) );
//	wp_enqueue_script( 'blocks', cln_get_asset_url( 'assets/js/blocks.js' ) );
//	wp_enqueue_script( 'course-overview', cln_get_asset_url( 'assets/js/course-overview.js' ) );
//	wp_enqueue_script( 'course-components', cln_get_asset_url( 'assets/js/components.js' ) );
//	wp_enqueue_script( 'course-templates', cln_get_asset_url( 'templates/build/index.js' ) );
//	wp_enqueue_script( 'course-progress', cln_get_asset_url( 'assets/js/course-progress.js' ) );
//	wp_enqueue_script( 'course-learner', cln_get_asset_url( 'assets/js/course-learner.js' ) );
	// css
	wp_enqueue_style( 'course-learner', cln_get_asset_url( 'assets/css/course-learner.css' ) );
}

add_action( 'wp_enqueue_scripts', 'cln_enqueue_scripts' );

function cln_get_course_sections_array( $id ) {
	/**
	 * @var LP_Course_Item $item
	 */
	$course        = learn_press_get_course( $id );
	$sectionsArray = array();
	$sections      = $course->get_sections();

	if ( $sections ) {
		foreach ( $sections as $section ) {
			$theSection = array(
				'title' => $section->get_title(),
				'desc'  => $section->get_description(),
				'id'    => absint( $section->get_id() ),
				'items' => array()
			);

			if ( $items = $section->get_items() ) {
				foreach ( $items as $item ) {
//					$theItem = array(
//						'id'        => $item->get_id(),
//						'title'     => $item->get_title(),
//						'name'      => get_post_field( 'post_name', $item->get_id() ),
//						'permalink' => $item->get_permalink(),
//						'type'      => $item->get_item_type(),
//						'isPreview' => $item->is_preview()
//					);

					$theSection['items'][] = apply_filters( 'learn-press/course-learner-item-settings', $item->get_id() );
				}
			}

			$sectionsArray[] = $theSection;
		}
	}

	return $sectionsArray;
}

function cln_get_course_settings( $id ) {
	global $wpdb;
	$course = learn_press_get_course( $id );

	global $wp_filter;

	if ( ! empty( $wp_filter['the_content'] ) ) {
		$callbacks = $wp_filter['the_content']->callbacks;
	}

	remove_filter( 'the_content', array( LP_Page_Controller::instance(), 'single_content' ), 10000 );

	if ( $course ) {
		$courseItem     = LP_Global::course_item();
		$courseSettings = array(
			'id'               => $id,
			'duration'         => $course->get_duration(),
			'maxStudents'      => $course->get_max_students(),
			'enrolledStudents' => $course->get_users_enrolled(),
			'retakeCourse'     => $course->get_retake_count(),
			'externalLink'     => $course->get_external_link(),
			'passingGrade'     => $course->get_passing_condition(),
			'passingGradeBy'   => 0,
			'coursePrices'     => array(
				'price'         => $course->get_price(),
				'salePrice'     => $course->get_sale_price(),
				'originalPrice' => $course->get_origin_price()
			),
			'requiredEnroll'   => $course->is_required_enroll(),
			'courseAuthor'     => array(
				'id'   => $course->get_author( 'id' ),
				'user' => $course->get_author( 'user_login' ),
				'name' => $course->get_author_display_name()
			),
			'courseStatus'     => get_post_status( $id ),
			'courseTabs'       => learn_press_get_course_tabs(),
			'courseContent'    => apply_filters( 'the_content', get_post_field( 'post_content', $id ) ),
			'coursePermalink'  => $course->get_permalink(),
			'openCourseItem'   => $courseItem ? array(
				'id'        => $courseItem->get_id(),
				'permalink' => $courseItem->get_permalink()
			) : false,/// defined( 'LP_CONTENT_SINGLE_ITEM' ) ? true : false,
			'userData'         => cln_get_user_course( $id ),
			'courseSections'   => cln_get_course_sections_array( $id ),
		);
	} else {
		$courseSettings = false;
	}

	if ( isset( $callbacks ) ) {
		$wp_filter['the_content']->callbacks = $callbacks;
	}

	return apply_filters( 'learn-press/course-learner-settings', $courseSettings, $id );
}

function cln_get_user_course( $id ) {

	$course     = learn_press_get_course( $id );
	$items      = $course->get_items();
	$user       = learn_press_get_current_user();
	$courseData = $user->get_course_data( $id );

	$data = array(
		'isLoggedIn'  => get_current_user_id(),
		'accessLevel' => 0,//$user->get_course_access_level( $id ),
		'courseItems' => array()
	);

	foreach ( $items as $item_id ) {
		$item           = $course->get_item( $item_id );
		$courseItem     = $courseData ? $courseData->get_item( $item_id ) : false;
		$courseItemData = array(
			'status' => ''
		);

		if ( $courseItem ) {
			$courseItemData = array(
				'startTime'      => $courseItem->get_start_time() ? $courseItem->get_start_time()->toSql() : false,
				'startTimeGmt'   => $courseItem->get_start_time_gmt() ? $courseItem->get_start_time_gmt()->toSql() : false,
				'endTime'        => $courseItem->get_end_time() ? $courseItem->get_end_time()->toSql() : false,
				'endTimeGmt'     => $courseItem->get_end_time_gmt() ? $courseItem->get_end_time_gmt()->toSql() : false,
				'expirationTime' => $courseItem->get_expiration_time() ? $courseItem->get_expiration_time()->toSql() : false,
				'status'         => $courseItem->get_status()
			);
		}

		$data['courseItems'][ $item_id ] = array_merge(
			array(
				'name'      => $item->get_title(),
				'permalink' => $item->get_permalink(),
				'id'        => absint( $item_id )
			),
			$course->get_item( $item_id )->get_data(),
			array( 'userSettings' => $courseItemData )
		);
	}

	return $data;
}

function cln_output_main_script() {
	global $post;

	if ( learn_press_is_course() ) {

		$courseSettings = cln_get_course_settings( $post->ID );
		$userSettings   = cln_get_user_course( $post->ID );

		$init_script = <<<JS
( function() {
	window._lpCourseLearner = new Promise( function( resolve ) {
		jQuery( function() {
			resolve( LP.courseLearner.init( '#learn-press-course-learner',  %d, %s, %s ) );
		} );
	} );
} )();
JS;

		$script = sprintf(
			$init_script,
			$post->ID,
			wp_json_encode( $courseSettings, learn_press_is_debug() ? JSON_PRETTY_PRINT : 0 ),
			wp_json_encode( array(), learn_press_is_debug() ? JSON_PRETTY_PRINT : 0 )
		);

		wp_add_inline_script( 'lp-course-learner', $script );
	}

	return func_get_arg( 0 );
}

add_filter( 'wp_enqueue_scripts', 'cln_output_main_script', 1000 );

function cln_replace_main_template( $located, $template_name, $args, $template_path, $default_path ) {

	$templates = array(
		'content-single-course.php',
		'content-single-item.php'
	);

	$template_basename = basename( $template_name );

	if ( ! in_array( $template_basename, $templates ) ) {
		return $located;
	}

//	if ( $template_basename === 'content-single-item.php' ) {
//		defined( 'LP_CONTENT_SINGLE_ITEM' ) && define( 'LP_CONTENT_SINGLE_ITEM', true );
//		return;
//	}

	$located = dirname( __FILE__ ) . '/templates/' . $template_name;

	return $located;
}


function cln_replace_main_template_n( $template_name, $template_path, $located, $args ) {
	if ( strpos( $template_name, 'content-single-course.php' ) === false ) {
		return;
	}

	$located = dirname( __FILE__ ) . '/templates/' . $template_name;

	include_once $located;
}

if ( 1 ) {
	add_filter( 'learn_press_get_template', 'cln_replace_main_template', 100, 5 );
} else {
	add_action( 'learn_press_before_template_part', 'cln_replace_main_template_n', 100, 4 );
}

//add_filter('template_include', function(){
//	print_r(func_get_args());die();
//} );

add_action( 'wp_print_scripts', function () {
	//wp_deregister_script( 'course' );
}, 100 );

add_shortcode( 'simple_learner', function () {
	ob_start();
	print_r( func_get_args() );

	return ob_get_clean();
} );

add_action( 'init', function () {
	$tabs = array_keys( learn_press_get_course_tabs() );

	foreach ( array_reverse( $tabs ) as $tabId ) {
		add_rewrite_rule(
			'^courses/([^/]+)/(' . $tabId . ')?/?$',
			'index.php?post_type=lp_course&name=$matches[1]&course-tab=$matches[2]',
			'top'
		);
		add_rewrite_tag( '%course-tab%', '(.*)' );
	}

	//add_permastruct( 'lp_courses', '/courses/%courses%/' );

	flush_rewrite_rules();
} );

add_action( 'wp_head', function () {
	global $wp_query, $wp;

	learn_press_get_course_tabs();
} );

add_filter( 'script_loader_src', function ( $a, $b ) {
	return add_query_arg( 'a', microtime( true ), $a );
}, 10, 2 );

add_action( 'init', function () {

	global $wpdb;
	$admin_user = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$wpdb->users} WHERE user_email=%s", get_option( 'admin_email' ) ) );
	if ( ! $api = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}learnpress_api_keys WHERE system=%d AND user_id=%d", 1, $admin_user->ID ) ) ) {
		$consumer_key    = 'ck_' . bin2hex( random_bytes( 16 ) );
		$consumer_secret = 'cs_' . bin2hex( random_bytes( 16 ) );

		$wpdb->insert(
			$wpdb->prefix . 'learnpress_api_keys',
			array(
				'user_id'         => $admin_user->ID,
				'description'     => __( 'System api key' ),
				'consumer_key'    => hash_hmac( 'sha256', $consumer_key, 'lp-api' ),
				'consumer_secret' => $consumer_secret,
				'methods'         => 'read_write',
				'permissions'     => 'all',
				'access_count'    => '0',
				'last_access'     => null,
				'nonces'          => '',
				'status'          => 1,
				'system'          => 1
			),
			array( '%d', '%s', '%s', '%s', '%s', '%s', '%d', '%s', '%s', '%d', '%d' )
		);
	}
} );



/**
 * WC API
 * ck_da0adb3bb3fa8af5f41e9c009d7c6f9b46b17ad6
 * cs_f32fc638765bcdab5058bc7df77de6b4dead1615
 *
 * User
 * ck_3a48292d201bac5227ca9570d86db48342a49b13
 * cs_b3e65b9b863898d1fac0ce5858860e20526ee0b0
 */
//add_action('template_include', function (){
//	echo wc_api_hash('ck_da0adb3bb3fa8af5f41e9c009d7c6f9b46b17ad6') . "\n";
//	echo wc_api_hash('ck_3a48292d201bac5227ca9570d86db48342a49b13');
//
//	die();
//}, -1000);
