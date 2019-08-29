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