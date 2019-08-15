import {Section} from '@learnpress/course-curriculum';
import {CourseOverview} from '@learnpress/blocks';

window.learn_press_course_overview_tab = function (props) {
    return <CourseOverview {...props} />
}

class TabOverview extends wp.element.Component {
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html:this.props.overview}} />
            </div>
        )
    }
}

export default TabOverview;