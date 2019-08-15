import {combineReducers} from '@wordpress/data';

const {random} = lodash;
const DEFAULT_STATE = {
    userData: null
};

import {SET_COURSE_DATA} from './constants';

export const courseLearner = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_COURSE_DATA:
            return {
                ...state,
                ...action.data
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.data
            };
        case 'SET_ITEM_DATA':
            state.userData.items[action.item][action.name] = action.value;

            const newState = {
                ...state,
                userData: {
                    ...state.userData,
                    items: state.userData.items
                }
            };

            return newState
        case 'ENROLL_COURSE':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    accessLevel: 20
                }
            }

        case 'LEAVE_COURSE':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    accessLevel: 0
                }
            }
    }

    return state;
}

export const courseUser = (state = {}, action) => {
    return state
}

export default combineReducers({
    courseLearner,
    courseUser
});