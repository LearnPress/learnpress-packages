import {combineReducers} from '@wordpress/data';
import {ADD_NOTICE, REMOVE_NOTICE, AUTO_DISMISS} from './constants';
import {uniqueId} from '@learnpress/utils';

const {reject, isString} = lodash;

const DEFAULT_STATE = {
    notices: [],
    autoDismiss: []
};

export const notices = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_NOTICE:
            let notice = action.notice;

            if(isString(notice)){
                notice = {
                    id: '',
                    message: notice,
                    type: 'notice'
                }
            }

            if(!notice.id){
                notice.id = uniqueId();
            }

            return {
                ...state,
                notices: [...state.notices, notice]
            }
        case REMOVE_NOTICE:
            return {
                ...state,
                notices: reject(state.notices, {id: action.id})
            };
        case AUTO_DISMISS:
            return {
                ...state,
                autoDismiss: [...state.autoDismiss, action.notice.id]
            }
    }

    return state;
};

export default notices;