import * as CONSTS from './constants';

export function enroll() {
    return {
        type: CONSTS.ENROLL_COURSE
    }
}

export function setUserData(data) {
    return {
        type: 'SET_USER_DATA',
        data: data
    }
}

export function setItemData(item, name, value){
    return {
        type: 'SET_ITEM_DATA',
        item,
        name,
        value
    }
}