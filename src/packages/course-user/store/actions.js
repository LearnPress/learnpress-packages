import {dispatch, select, apiFetch} from '@learnpress/data-controls';
import {select as wpSelect} from '@wordpress/data';

/**
 * Set user data for app.
 *
 * @param data
 * @return {{type: string, data: *}}
 */
export function setUserData(data){
    return {
        type: 'SET_USER_DATA',
        data
    }
}

export function setCourseItem(itemId, data){
    return {
        type: 'SET_ITEM',
        itemId,
        data
    }
}

export function* enrollCourseX() {

    yield dispatch('course-learner/course', '__requestEnrollCourseStart');

    const user = yield LP.dataControls.apiFetch({path: 'lp/v1/users/123/enroll/', method: 'POST'});

    yield dispatch('course-learner/course', 'enrollCourse', user);

    yield dispatch('course-learner/course', '__requestEnrollCourseSuccess');

}

export function* fetchItem(itemId) {
    console.time('fetchItem')
    const courseId = yield select('course-learner/course', 'getCourseProp', 'id');

    const itemResults = yield apiFetch({
        path: `lp/v1/courses/${courseId}/item/${itemId}`,
        method: 'GET'
    });

    yield dispatch('course-learner/course', 'fetchItemResults', itemResults.result);

    console.timeEnd('fetchItem')

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

export function* markItemComplete(completed = true, itemId, courseId = 0, userId = 0) {

    courseId = !courseId ? yield select('course-learner/course', 'getCourseProp', 'id') : courseId;
    userId = !userId ? yield select('course-learner/user', 'getProp', 'isLoggedIn') : userId;

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
        yield dispatch('course-learner/user', 'completeItem', itemId);
    } else {
        yield dispatch('course-learner/user', 'markItemIncomplete', itemId);
    }

    console.log(itemResults)
}
