import {hooks} from '@learnpress/utils';
import {QUIZ_CPT, LESSON_CPT} from './constants';
import CourseQuiz from '@learnpress/course-quiz';
import CourseLesson from '@learnpress/course-lesson';

export function init() {

}

export function initHooks() {

    hooks.addAction('course-item-extra', function (item, args) {
        const props = {...args, item}
        switch (item.type) {
            case QUIZ_CPT:
                return <CourseQuiz {...props} key={ item.id }/>;
            case LESSON_CPT:
                return <CourseLesson {...props} key={ item.id }/>;
        }
    });
}