<?php

/**
 * Class LP_Rest_User
 */
class LP_Rest_User extends LP_Abstract_REST_Controller {
	/**
	 * LP_Rest_User constructor.
	 */
	public function __construct() {
		$this->namespace = 'lp/v1';
		$this->rest_base = 'users';
		parent::__construct();
	}

	public function register_routes() {
		$this->routes = array(
			''                      => array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'check_admin_permission' ),
				),
			),
			'(?P<id>[\d]+)'         => array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'check_enroll_permission' ),
				),
			),
			'(?P<uid>[\d]+)/enroll' => array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'enroll' ),
					'permission_callback' => array( $this, 'check_enroll_permission' ),
				),
			),

			'(?P<id>[\d]+)/start-quiz'         => array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'start_quiz' ),
					'permission_callback' => array( $this, 'check_enroll_permission' ),
				),
			),
			'(?P<id>[\d]+)/mark-item-complete' => array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'mark_item_complete' ),
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
	 * Mark course item is completed or un-completed.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return WP_REST_Response
	 */
	public function mark_item_complete( $request ) {
		$itemId      = $request['itemId'];
		$courseId    = $request['courseId'];
		$userId      = $request['userId'];
		$isCompleted = $request['completed'];

		$user       = learn_press_get_user( $userId );
		$courseData = $user->get_course_data( $courseId );

		$response = array(
			'itemId'      => $request['itemId'],
			'courseId'    => $request['courseId'],
			'userId'      => $request['userId'],
			'isCompleted' => $request['completed']
		);

		$defaultCompleteItemTypes = apply_filters( 'learn-press/rest-api/default-completed-item-types', array( LP_LESSON_CPT ) );

		if ( $defaultCompleteItemTypes && in_array( get_post_type( $itemId ), $defaultCompleteItemTypes ) ) {
			if ( ! $courseData ) {
				$response['success'] = false;
			} else {
				$courseItem = $courseData->get_item( $itemId );

				if ( $courseItem ) {
					$courseItem->set_status( $isCompleted ? 'completed' : '' );
					$return = $courseItem->update();
				} elseif ( $isCompleted ) {
					$return = $user->complete_lesson( $itemId, $courseId );
				}
			}
		}

		if ( isset( $return ) ) {
			$success             = ! is_wp_error( $return );
			$response['success'] = $success;
			$response['return']  = $success ? $return : $return->get_error_message();

		} else {
			$response['success'] = false;
		}

		return rest_ensure_response( $response );
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

	public function start_quiz( $request ) {
		$response = array(
			'success' => true,
			'result'  => array(
				'courseId' => $request['courseId'],
				'quizId'   => $request['quizId'],
				'userId'   => $request['userId'],
				'xxx'      => get_current_user_id()
			)
		);

		return rest_ensure_response( $response );
	}
}