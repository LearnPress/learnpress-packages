import {select} from '@wordpress/data';

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

export const isRequestingEnrollCourse = (state) => {
    const {courseLearner} = state;

    return courseLearner.isRequestingEnrollCourse === true;
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

/**
 * Get prop value of course settings.
 *
 * @param state
 * @param prop
 * @return {*}
 */
export function getCourseProp(state, prop) {
    const {courseLearner} = state;

    return courseLearner[prop];
}

export function isOpeningCourseItem(state) {
    const {courseLearner} = state;

    return courseLearner.openCourseItem;
}

export function getCurrentItemResults(state) {
    const {courseLearner} = state;

    return courseLearner.currentItemResults;
}

export const getCompletedItems = function (state) {
    const courseItems = get(state, 'courseUser.courseItems') || {};
    return Object.values(courseItems).reduce((memo, item) => {
        if (item.status === 'completed') {
            memo[item.id] = item;
        }

        return memo;
    }, {})
}
