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
function cln_get_asset_url( $url ) {
	$url = plugins_url( $url, __FILE__ );

	return learn_press_is_debug() ? add_query_arg( 'no-cache', microtime( true ), $url ) : $url;
}

function cln_enqueue_scripts() {
	$dependencies = array(
		'wp-element',
		'wp-utils',
		'wp-compose',
		'wp-data',
		'wp-hooks',
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
		'course-overview',
		'course-progress',
		'course-curriculum',
		'course-learner',
		'course-templates'  => 'templates/build/index.js',
	);
	$loadDependencies = true;
	foreach ( $packages as $handle => $package ) {
		if ( is_numeric( $handle ) ) {
			$handle = $package;
		}

		$url = preg_match( '/.js$/', $package ) ? $package : 'assets/js/' . $package . '.js';

		wp_enqueue_script( $handle, cln_get_asset_url( $url ), $loadDependencies ? $dependencies : array() );
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
		$courseSettings = array(
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
			'courseSections'   => cln_get_course_sections_array( $id ),
			'courseTabs'       => learn_press_get_course_tabs(),
			'courseContent'    => apply_filters( 'the_content', get_post_field( 'post_content', $id ) ),
			'userData'         => cln_get_user_course( $id )
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
		'isLoggedIn'  => is_user_logged_in(),
		'accessLevel' => 0,//$user->get_course_access_level( $id ),
		'courseItems' => array()
	);

	foreach ( $items as $item_id ) {
		$item           = $course->get_item( $item_id );
		$courseItem     = $courseData ? $courseData->get_item( $item_id ) : false;
		$courseItemData = array();

		if ( $courseItem ) {
			$courseItemData = array(
				'startTime'      => $courseItem->get_start_time() ? $courseItem->get_start_time()->toSql() : false,
				'startTimeGmt'   => $courseItem->get_start_time_gmt() ? $courseItem->get_start_time_gmt()->toSql() : false,
				'endTime'        => $courseItem->get_end_time() ? $courseItem->get_end_time()->toSql() : false,
				'endTimeGmt'     => $courseItem->get_end_time_gmt() ? $courseItem->get_end_time_gmt()->toSql() : false,
				'expirationTime' => $courseItem->get_expiration_time() ? $courseItem->get_expiration_time()->toSql() : false
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

		wp_add_inline_script( 'course-learner', $script );
	}

	return func_get_arg( 0 );
}

add_filter( 'wp_enqueue_scripts', 'cln_output_main_script', 1000 );

function cln_replace_main_template( $located, $template_name, $args, $template_path, $default_path ) {
	if ( strpos( $template_name, 'content-single-course.php' ) === false ) {
		return $located;
	}

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
		add_rewrite_endpoint( $tabId, EP_PERMALINK | EP_PAGES );
	}
} );