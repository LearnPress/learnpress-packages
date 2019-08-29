import {CourseTabs} from '@learnpress/blocks';
import {CoursePopup} from '@learnpress/course-learner';
import CourseCurriculum from '@learnpress/course-curriculum';

import CourseProgress from '@learnpress/course-progress';

const {Template} = LP.components;
const {hooks} = LP.utils;

// function CoursePopup(props) {
//     return <div id="course-popup">
//         <div id="course-popup-sidebar">
//         <CourseCurriculum/>
//         </div>
//         <div id="course-popup-main">
//         {JSON.stringify(props.openCourseItem)}
//         </div>
//     </div>
// }

class ContentLanding extends wp.element.Component {
    render() {
        const {
            enrollCourse,
            openItem
        } = this.props;
        return (
            <div className="learnpress-landing">
                {
                    /**
                     * Hook
                     */
                    hooks.doAction('before-course-landing')
                }

                {
                    !this.props.openCourseItem && <CourseTabs/>
                }

                {
                    !!this.props.openCourseItem && <CoursePopup openCourseItem={ this.props.openCourseItem } />
                }

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