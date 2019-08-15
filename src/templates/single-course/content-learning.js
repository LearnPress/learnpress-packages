import {CourseTabs} from '@learnpress/blocks';
import CourseProgress from '@learnpress/course-progress';

const {Template} = LP.components;
const {hooks} = LP.utils;

class ContentLearning extends wp.element.Component {
    render() {
        const {
            leaveCourse
        } = this.props;

        return (
            <div className="learnpress-learning">
                {
                    /**
                     * Hook
                     */
                    hooks.doAction('before-course-learning')
                }

                <CourseProgress />

                <CourseTabs />

                <button onClick={(e) => {
                    e.preventDefault();
                    leaveCourse()
                }}>Leave
                </button>

                {
                    /**
                     * Hook
                     */
                    hooks.doAction('after-course-learning')
                }
            </div>
        )
    }
}

export default ContentLearning;