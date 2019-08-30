import {hooks} from '@learnpress/utils';
import {QUIZ_CPT, LESSON_CPT} from './constants';
import CourseQuiz from '@learnpress/course-quiz';
import CourseLesson from '@learnpress/course-lesson';

export function init() {

}

export function initHooks() {

    hooks.addAction('course-item-extra', function (item, args) {
        const props = {...args, item};

        switch (item.type) {
            case QUIZ_CPT:
                return <CourseQuiz {...props} key={ item.id }/>;
            case LESSON_CPT:
                return <CourseLesson {...props} key={ item.id }/>;
        }
    });

    hooks.addAction('course-item-content', function (item, args) {
        const props = {...args, item};

        switch (item.type) {
            case QUIZ_CPT:
                const status = wp.data.select('course-learner/user').getItemStatus(item.id);

                return !status || status === 'completed' ? <div dangerouslySetInnerHTML={ {__html: item.content} }/> : '';
            case LESSON_CPT:
                return <div dangerouslySetInnerHTML={ {__html: item.content} }/>
        }
    });

}