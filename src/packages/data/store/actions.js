import {dispatch, select, apiFetch} from '@learnpress/data-controls';

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