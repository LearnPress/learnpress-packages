import {CourseTabs} from '@learnpress/blocks';
import CourseProgress from '@learnpress/course-progress';

const {Template} = LP.components;
const {hooks} = LP.utils;

class ContentLanding extends wp.element.Component {
    render() {
        const {
            enrollCourse
        } = this.props;

        return (
            <div className="learnpress-landing">
                {
                    /**
                     * Hook
                     */
                    hooks.doAction('before-course-landing')
                }

                <CourseTabs/>

                {
                    /**
                     * Hook
                     */
                    hooks.doAction('after-course-landing')
                }

                <button onClick={(e) => {
                    e.preventDefault();
                    enrollCourse()
                }}>Enroll
                </button>
            </div>
        )
    }
}

export default ContentLanding;