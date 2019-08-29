<?php

/**
 * Class LP_Rest_Course
 */
class LP_Rest_Course extends LP_Abstract_REST_Controller {
	/**
	 * LP_Rest_Course constructor.
	 */
	public function __construct() {
		$this->namespace = 'lp/v1';
		$this->rest_base = 'courses';
		parent::__construct();
	}

	public function register_routes() {
		$this->routes = array(
			''                                  => array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'check_admin_permission' ),
				),
			),
			'(?P<id>[\d]+)'                     => array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'check_enroll_permission' ),
				),
			),
			'(?P<cid>[\d]+)/item/(?P<id>[\d]+)' => array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_course_item' ),
					'permission_callback' => array( $this, 'check_enroll_permission' ),
				),
			),

//			'(?P<key>[\w]+)' => array(
//				'args'   => array(
//					'id' => array(
//						'description' => __( 'Unique identifier for the resource.', 'learnpress' ),
//						'type'        => 'string',
//					),
//				),
//				array(
//					'methods'             => WP_REST_Server::READABLE,
//					'callback'            => array( $this, 'get_item' ),
//					'permission_callback' => array( $this, 'check_admin_permission' ),
//				),
//				array(
//					'methods'             => WP_REST_Server::EDITABLE,
//					'callback'            => array( $this, 'update_item' ),
//					'permission_callback' => array( $this, 'check_admin_permission' ),
//					'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE ),
//				),
//				array(
//					'methods'             => WP_REST_Server::DELETABLE,
//					'callback'            => array( $this, 'delete_item' ),
//					'permission_callback' => array( $this, 'check_admin_permission' ),
//				),
//				'schema' => array( $this, 'get_public_item_schema' ),
//			)
		);

		parent::register_routes();

	}

	public function check_enroll_permission() {
		return true;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return WP_REST_Response
	 */
	public function enroll( $request ) {
		$response = array(
			'uid' => $request['uid'],
			'cid' => $request['cid']
		);

		return rest_ensure_response( $response );
	}

	public function get_item( $request ) {
		$response = array(
			'user' => $request['id']
		);

		return rest_ensure_response( $response );
	}

	public function get_course_item( $request ) {
		$courseId = $request['cid'];
		$itemId   = $request['id'];

		$course = learn_press_get_course( $courseId );
		$item   = $course->get_item( $itemId );
		$result = array(
			'id'      => $itemId,
			'type'    => get_post_type( $itemId ),
			'title'   => $item->get_title(),
			'content' => $item->get_content()
		);

		if ( get_post_type( $itemId ) === LP_QUIZ_CPT ) {
			$course              = learn_press_get_course( $courseId );
			$quiz                = $course->get_item( $itemId );
			$result['questions'] = array();

			if ( $questions = $quiz->get_question_ids() ) {
				foreach ( $questions as $at => $questionId ) {
					$question = learn_press_get_question( $questionId );

					$result['questions'][] = array(
						'id'        => $questionId,
						'permalink' => $question->get_permalink(),
						'title'     => $question->get_title()
					);
				}
			}
		}

		$response = array(
			'status' => 'success',
			'result' => $result
		);

		return rest_ensure_response( $response );
	}
}