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

function cln_enqueue_scripts() {
	wp_enqueue_script( 'course-curriculum', plugins_url( 'assets/js/course-curriculum.js', __FILE__ ), array(
		'wp-element',
		'wp-utils',
		'wp-compose',
		'wp-data',
		'wp-hooks',
		'lodash'
	) );
	wp_enqueue_script( 'course-components', plugins_url( 'assets/js/components.js', __FILE__ ) );
	wp_enqueue_script( 'course-templates', plugins_url( 'templates/build/index.js', __FILE__ ) );
	//wp_enqueue_script( 'course-template', plugins_url( 'templates/build/template.js', __FILE__ ) );
	wp_enqueue_script( 'course-progress', plugins_url( 'assets/js/course-progress.js', __FILE__ ) );
	wp_enqueue_script( 'course-learner', plugins_url( 'assets/js/course-learner.js', __FILE__ ) );
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
					$theItem = array(
						'id'        => $item->get_id(),
						'title'     => $item->get_title(),
						'name'      => get_post_field( 'post_name', $item->get_id() ),
						'permalink' => $item->get_permalink(),
						'type'      => $item->get_item_type(),
						'isPreview' => $item->is_preview()
					);

					$theSection['items'][] = apply_filters( 'learn-press/course-learner-item-settings', $theItem );
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
		'courseTabs'       => learn_press_get_course_tabs()
	);

	return apply_filters( 'learn-press/course-learner-settings', $courseSettings, $id );
}

function cln_get_user_course( $id ) {
	$data       = array();
	$course     = learn_press_get_course( $id );
	$items      = $course->get_items();
	$user       = learn_press_get_current_user();
	$courseData = $user->get_course_data( $id );

	foreach ( $items as $item_id ) {
		$item                      = $course->get_item( $item_id );
		$courseItem                = $courseData ? $courseData->get_item( $item_id ) : false;
		$data['items'][ $item_id ] = array(
			'name'         => $item->get_title(),
			'id'           => $item_id,
			'settings'     => array_merge(
				$course->get_item( $item_id )->get_data(),
				array( 'name' => $item->get_title() )
			),
			'userSettings' => $courseItem ? $courseItem->get_data() : array()
		);
	}

	return $data;
}

function cln_output_main_script() {
	global $post;

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
		wp_json_encode( $userSettings, learn_press_is_debug() ? JSON_PRETTY_PRINT : 0 )
	);

	wp_add_inline_script( 'course-learner', $script );

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
	wp_deregister_script( 'learn-press-course' );
} );