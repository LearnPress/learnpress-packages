const {get} = lodash;

export function hasEnrolled(state) {
    return get(state, 'userData.accessLevel') >= 20;
}

export function getAccessLevel(state) {
    const {courseLearner} = state;

    return get(courseLearner, 'userData.accessLevel');
}

export const getUserData = (state) => {
    const {courseLearner} = state;

    return courseLearner.userData;
}

/**
 * Get course content.
 *
 * @param state
 * @return {*}
 */
export const getCourseOverview = (state) => {
    const {courseLearner} = state;

    return courseLearner.courseContent;
}

/**
 * Get all sections of course.
 *
 * @param state
 * @return {*|Array}
 */
export const getCourseSections = (state) => {
    const {courseLearner} = state;

    return courseLearner.courseSections || [];
}

/**
 *
 * @param state
 * @return {*|Array}
 */
export const getUserItems = (state) => {
    const {courseLearner} = state;

    return get(courseLearner, 'userData.courseItems') || [];
}

/**
 * Get tabs display in course page.
 *
 * @param state
 * @return {*}
 */
export const getTabs = (state) => {
    const {courseLearner} = state;

    return courseLearner.courseTabs || {};
}