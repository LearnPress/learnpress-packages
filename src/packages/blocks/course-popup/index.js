import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import CourseCurriculum from '@learnpress/course-curriculum';
//const {CourseCurriculum} = LP.courseCurriculum;
class CoursePopup extends Component {
    render() {
        const {
            openCourseItem
        } = this.props;
        console.log("2.",CourseCurriculum)
        return (
            <div id="course-popup">
                <div id="course-popup-sidebar">
                </div>
                <div id="course-popup-main">
                    {JSON.stringify(openCourseItem)}
                </div>
            </div>
        )
    }
}

export default compose([
    withSelect((select) => {
        const {
            isOpeningCourseItem
        } = select('course-learner/course');

        return {
            openCourseItem: isOpeningCourseItem()
        }
    })
])(CoursePopup);