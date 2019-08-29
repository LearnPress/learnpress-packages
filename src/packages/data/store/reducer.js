import {combineReducers} from '@wordpress/data';

const {omit} = lodash;
const COURSE_ITEMS = {
};


export const courseItems = (state = COURSE_ITEMS, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return {
                ...state,
                [action.itemId]: action.data
            }
    }
    return state;
}

export const courseUser = (state = {}, action) => {
    return state
}

export default combineReducers({
    courseItems,
    courseUser
});