const {get} = lodash;

export function getCourseItem(state, itemId) {
    const {courseItems} = state;

    return courseItems[itemId];
}