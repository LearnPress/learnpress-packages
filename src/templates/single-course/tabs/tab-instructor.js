import CourseCurriculum from '@learnpress/course-curriculum';


window.learn_press_course_instructor_tab = function (props) {
    return <CourseCurriculum {...props}/>;
}

class TabInstructor extends wp.element.Component {


    render() {
        const {sections, items} = this.props;
        return (
            <div>
                {
                    sections.map((section) => {
                        return <Section section={ section } items={items} />
                    })
                }
            </div>
        )
    }
}

export default TabInstructor;