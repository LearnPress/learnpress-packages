import * as CONSTS from './constants';
import {dispatch, select, apiFetch} from '@learnpress/data-controls';

export function enroll() {
    return {
        type: CONSTS.ENROLL_COURSE
    }
}

/**
 * Enroll an user to a course.
 *
 * @param courseId
 * @param userId
 * @return {{type, data: {courseId: *, userId: *}}}
 */
export function enrollCourse(courseId, userId) {
    return {
        type: CONSTS.ENROLL_COURSE,
        data: {
            courseId,
            userId
        }
    }
}

/**
 * Give an user out of course.
 *
 * @param courseId
 * @param userId
 * @return {{type, data: {courseId: *, userId: *}}}
 */
export function leaveCourse(courseId, userId) {
    return {
        type: CONSTS.LEAVE_COURSE,
        data: {
            courseId,
            userId
        }
    }
}

export function setUserData(data) {
    return {
        type: 'SET_USER_DATA',
        data: data
    }
}

export function setItemData(item, name, value) {
    return {
        type: 'SET_ITEM_DATA',
        item,
        name,
        value
    }
}

export function setCourseData(data) {
    return {
        type: CONSTS.SET_COURSE_DATA,
        data: data
    }
}

/**
 * Action is triggered before request api to enroll course.
 *
 * @param options
 * @return {{type: string, options: *}}
 * @private
 */
export function __requestEnrollCourseStart(options) {
    return {
        type: 'REQUEST_ENROLL_COURSE_START',
        options
    }
}

/**
 * Action is triggered after request api to enroll course success.
 *
 * @param options
 * @return {{type: string, options: *}}
 * @private
 */
export function __requestEnrollCourseSuccess(options) {
    return {
        type: 'REQUEST_ENROLL_COURSE_SUCCESS',
        options
    }
}

/**
 * Open course item.
 *
 * @param item
 */
export function openCourseItem(item) {
    return {
        type: 'OPEN_COURSE_ITEM',
        item
    }
}

export function closeCourseItem() {
    return {
        type: 'CLOSE_COURSE_ITEM'
    }
}

export function fetchItemResults(results) {
    return {
        type: 'COURSE_FETCH_ITEM',
        results
    }
}

export function completeItem(itemId) {
    return {
        type: 'COMPLETE_ITEM',
        itemId
    }
}

export function markItemIncomplete(itemId) {
    return {
        type: 'MARK_INCOMPLETE_ITEM',
        itemId
    }
}

export function __requestStartQuizStart(quizId, courseId, userId) {
    return {
        type: 'START_QUIZ',
        quizId,
        courseId,
        userId
    }
}

export function __requestStartQuizSuccess(quizId, courseId, userId) {
    return {
        type: 'START_QUIZ_SUCCESS',
        quizId,
        courseId,
        userId
    }
}

export function* startQuiz(quizId, courseId, userId) {
    yield dispatch('course-learner/course', '__requestStartQuizStart');

    const quiz = yield apiFetch({
        path: 'lp/v1/users/123/start-quiz/',
        method: 'POST',
        data: {
            courseId: courseId,
            quizId: quizId,
            userId: userId
        }
    });

    //yield dispatch('course-learner/course', 'startQuiz', quiz);

    yield dispatch('course-learner/course', '__requestStartQuizSuccess', quiz);
}

export function* enrollCourseX() {

    yield dispatch('course-learner/course', '__requestEnrollCourseStart');

    const user = yield LP.dataControls.apiFetch({path: 'lp/v1/users/123/enroll/', method: 'POST'});

    yield dispatch('course-learner/course', 'enrollCourse', user);

    yield dispatch('course-learner/course', '__requestEnrollCourseSuccess');

}

export function* fetchItem(itemId) {

    console.time(`fetchItem-${itemId}`)
    let cached = yield select('course-learner/data', 'getCourseItem', itemId);

    if (!cached) {

        const courseId = yield select('course-learner/course', 'getCourseProp', 'id');

        const itemResults = yield apiFetch({
            path: `lp/v1/courses/${courseId}/item/${itemId}`,
            method: 'GET'
        });

        cached = itemResults.result;

        yield dispatch('course-learner/data', 'setCourseItem', itemId, cached);
    }

    yield dispatch('course-learner/course', 'fetchItemResults', cached);
    console.timeEnd(`fetchItem-${itemId}`)

}

export function* markItemComplete(completed = true, itemId, courseId = 0, userId = 0) {

    courseId = !courseId ? yield select('course-learner/course', 'getCourseProp', 'id') : courseId;
    userId = !userId ? yield select('course-learner/course', 'getCourseProp', 'id') : userId;

    const itemResults = yield apiFetch({
        path: `lp/v1/users/${userId}/mark-item-complete/`,
        method: 'POST',
        data: {
            courseId,
            userId,
            itemId,
            completed: completed
        }
    });

    if (completed) {
        yield dispatch('course-learner/course', 'completeItem', itemId);
    } else {
        yield dispatch('course-learner/course', 'markItemIncomplete', itemId);
    }

    console.log(itemResults)
}