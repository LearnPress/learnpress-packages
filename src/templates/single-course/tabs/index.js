const {Component} = wp.element;

class CourseTabs extends Component {
    render() {
        const {
            tabs,
            selectTab,
            isActiveTab,
            displayTab
        } = this.props;

        return (
            <div id="learn-press-course-tabs">
                <ul className="learn-press-nav-tabs course-nav-tabs">
                    {
                        Object.keys(tabs).map((tabId) => {
                            const theTab = tabs[tabId];
                            const tabClass = ['course-nav', 'course-nav-tab-' + tabId];

                            if (isActiveTab(tabId)) {
                                tabClass.push('active')
                            }

                            return (
                                <li className={ tabClass.join(' ') }>
                                    <a href={ '?tab=' + theTab.id } data-tab={ '#' + theTab.id }
                                       onClick={(e) => {
                                           selectTab(e, tabId)
                                       }}>{ theTab.title }</a>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    Object.keys(tabs).map((tabId) => {
                        if (!isActiveTab(tabId)) {
                            return;
                        }

                        const theTab = tabs[tabId];
                        const tabClass = ['course-tab-panel-' + tabId, 'course-tab-panel active'];

                        return isActiveTab(tabId) &&
                            <div className={ tabClass.join(' ') } id={ theTab.id }>
                                {displayTab(theTab, this)}
                            </div>
                    })
                }

            </div>
        )
    }
}

export default CourseTabs;