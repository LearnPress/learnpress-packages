import {dispatch, select, apiFetch} from '@learnpress/data-controls';
import {ADD_NOTICE, REMOVE_NOTICE, AUTO_DISMISS} from './constants';

export function addNotice(notice) {
    return {
        type: ADD_NOTICE,
        notice
    }
}

export function removeNotice(id) {
    return {
        type: REMOVE_NOTICE,
        id
    }
}

export function autoDismiss(notice) {
    return {
        type: AUTO_DISMISS,
        notice: notice
    }
}

export function* enrollCourseX() {

    yield dispatch('course-learner/course', '__requestEnrollCourseStart');

    const user = yield LP.dataControls.apiFetch({path: 'lp/v1/users/123/enroll/', method: 'POST'});

    yield dispatch('course-learner/course', 'enrollCourse', user);

    yield dispatch('course-learner/course', '__requestEnrollCourseSuccess');

}