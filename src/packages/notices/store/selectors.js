const {get} = lodash;
const {select} = wp.data;

export function getNotices(state, type){
    const notices = state.notices || [];

    return type ? notices.filter((notice) => {
        return notice.type === type;
    }) : notices;
}

export function getNotice(state, id) {
    const notices = state.notices || [];

    return notices.find((notice) => {
        return notice.id === id;
    });
}

export function hasNotices(state, type) {
    const notices = select('course-learner/notices').getNotices(type);

    return notices && notices.length;
}

