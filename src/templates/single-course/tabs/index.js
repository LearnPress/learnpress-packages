class CourseTabs extends wp.element.Component {
    constructor() {
        super(...arguments);

        this.state = {
            tabs: {
                "overview": {
                    "title": "Overview",
                    "priority": 10,
                    "callback": "learn_press_course_overview_tab",
                    "id": "tab-overview"
                },
                "curriculum": {
                    "title": "Curriculum",
                    "priority": 30,
                    "callback": "learn_press_course_curriculum_tab",
                    "id": "tab-curriculum",
                    "active": true
                },
                "instructor": {
                    "title": "Instructor",
                    "priority": 40,
                    "callback": "learn_press_course_instructor_tab",
                    "id": "tab-instructor"
                }
            }
        }

        //this.selectTab = this.selectTab.bind(this);
    }

    selectTab(e, tabId) {
        e.preventDefault();
        console.log(tabId)
    }

    render() {

        const {tabs} = this.state;

        return (
            <>
            <ul className="learn-press-nav-tabs course-nav-tabs">
                {
                    Object.keys(tabs).map((tabId) => {
                        const theTab = tabs[tabId];
                        const tabClass = ['course-nav', 'course-nav-tab-' + tabId];

                        return (
                            <li className={ tabClass.join(' ') }>
                                <a href={ '?tab=' + theTab.id } data-tab={ '#' + theTab.id }
                                   onClick={(e) => {
                                       this.selectTab(e, tabId)
                                   }}>{ theTab.title }</a>
                            </li>
                        )
                    })
                }
            </ul>
            {
                Object.keys(tabs).map((tabId) => {
                    const theTab = tabs[tabId];
                    const tabClass = ['course-tab-panel-' + tabId, 'course-tab-panel'];

                    return (
                        <div className={ tabClass.join(' ') } id={ theTab.id }>
                            {JSON.stringify(theTab)}
                        </div>
                    )
                })
            }
            </>
        )
    }
}

export default CourseTabs;