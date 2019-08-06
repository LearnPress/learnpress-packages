const {random} = lodash;

const DEFAULT_STATE = {
    userData: null
};

export const CourseLearner = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.data
            };
        case 'SET_ITEM_DATA':
            state.userData.items[action.item][action.name] = action.value;
            console.time('Y')
            const newState = {
                ...state,
                userData:{
                    ...state.userData,
                    items: state.userData.items
                }
            };
            console.timeEnd('Y')

            return newState
    }

    return state;
}

export default CourseLearner;