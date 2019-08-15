import * as CONSTS from './constants';

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