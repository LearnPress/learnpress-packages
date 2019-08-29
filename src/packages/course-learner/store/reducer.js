import {combineReducers} from '@wordpress/data';

const {omit} = lodash;
const DEFAULT_STATE = {
    userData: null
};

import {SET_COURSE_DATA} from './constants';

export const courseLearner = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_COURSE_DATA:
            const {data} = action;
            if (data.singleItem) {

            }
            return {
                ...state,
                ...data
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

        case 'REQUEST_ENROLL_COURSE_START':
            return {
                ...state,
                isRequestingEnrollCourse: true
            }

        case 'REQUEST_ENROLL_COURSE_SUCCESS':
            return {
                ...state,
                isRequestingEnrollCourse: false
            }

        case 'OPEN_COURSE_ITEM':
            return {
                ...state,
                openCourseItem: action.item
            }

        case 'CLOSE_COURSE_ITEM':
            return omit({...state}, 'openCourseItem');

        case 'COURSE_FETCH_ITEM':
            return {
                ...state,
                currentItemResults: action.results
            }

        // case 'COMPLETE_ITEM':
        //     let {userData} = state;
        //     let courseItems = Object.values(userData.courseItems);
        //     userData = {
        //         ...userData,
        //         courseItems: courseItems.reduce((memo, item) => {
        //             memo[item.id] = item.id == action.itemId ? {...item, status: 'completed'} : {...item};
        //             return memo;
        //         }, {})
        //     }
        //     console.log('AAAA', action.itemId)
        //     return {
        //         ...state,
        //         userData
        //     }

    }

    return state;
}

export const courseUser = (state = {}, action) => {
    switch (action.type) {
        case SET_COURSE_DATA:

            return {
                ...state,
                ...action.data.userData
            }
        case 'COMPLETE_ITEM':
        case 'MARK_INCOMPLETE_ITEM':
            let courseItems = Object.values(state.courseItems);

            return {
                ...state,
                courseItems: courseItems.reduce((memo, item) => {
                    memo[item.id] = item.id == action.itemId ?
                        {...item, status: action.type === 'COMPLETE_ITEM' ? 'completed' : ''} :
                        {...item};
                    return memo;
                }, {})
            }
        case 'START_QUIZ':
        case 'START_QUIZ_SUCCESS':
            console.log(action)

    }

    return state
}

export const wtf = (state = {}, action) => {
    switch (action.type) {
        case 'COMPLETE_ITEM':
            return {
                ...state,

            }
    }

    return state
}

export default combineReducers({
    courseLearner,
    courseUser,
    wtf
});