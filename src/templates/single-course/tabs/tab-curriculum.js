import CourseCurriculum from '@learnpress/course-curriculum';
import {Section} from '@learnpress/course-curriculum';


window.learn_press_course_curriculum_tab = function (props) {
    return <CourseCurriculum {...props}/>;
}

class TabCurriculum extends wp.element.Component {


    render() {
        const {sections, items} = this.props;
        return (
            <div>
                {
                    sections.map((section) => {
                        return <Section section={ section } items={items} key={section.id} />
                    })
                }
            </div>
        )
    }
}

export default TabCurriculum;