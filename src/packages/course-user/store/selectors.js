import {select} from '@wordpress/data';
const {get} = lodash;

export function getProp(state, prop, defaultValue) {
    return state[prop] || defaultValue;
}


export function getCompletedItems(state) {
    const courseItems = get(state, 'courseItems') || {};
    return Object.values(courseItems).reduce((memo, item) => {
        if (get(item, 'userSettings.status') === 'completed') {
            memo[item.id] = item;
        }

        return memo;
    }, {})
}

export function isCompletedItem(state, itemId) {
    const completedItems = select('course-learner/user').getCompletedItems();
    return completedItems && completedItems[itemId];
}

export function getItemById(state, itemId) {
    const courseItems = get(state, 'courseItems') || {};

    return Object.values(courseItems).find((item) => {
        return item.id == itemId
    });
}

/**
 * Get current status of an item in course.
 *
 * @param state
 * @param itemId
 */
export function getItemStatus(state, itemId) {
    const item = select('course-learner/user').getItemById(itemId);
    return item ? get(item, 'userSettings.status') : '';
}