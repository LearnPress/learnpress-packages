const {hooks} = LP.utils;
const {compose} = wp.compose;
const {Component} = wp.element;
const {withSelect} = wp.data;
const {pickBy, isEmpty} = lodash;
const {Template} = LP.components;

class CourseTabs extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            activeTab: ''
        }

        hooks.addFilter('course-tab-content', this.tabContent.bind(this));

        //this.tabContent = this.tabContent.bind(this);
    }

    getDefaultTabId(tabs) {
        tabs = tabs||this.props.tabs;

        // Pick the tab is active
        let activeTabs = pickBy(tabs, 'active');

        if (isEmpty(activeTabs)) {
            activeTabs = tabs;
        }

        // Get the first tab if there is more than one.
        return Object.keys(activeTabs)[0];
    }

    /**
     * Update active tab when component receive props.
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        if(this.state.activeTab){
            return;
        }

        this.setState(() => {
            return {activeTab: this.getDefaultTabId(nextProps.tabs)}
        })
    }

    /**
     *
     * @param tabId
     */
    updateTab(tabId) {
        this.setState((state) => {
            if (state.activeTab === tabId) {
                return false;
            }

            return {
                activeTab: tabId
            };
        });

        console.log(window.location.href)
    }

    tabContent(content, tabId, theTab) {
        const callback = window[theTab.callback] || function () {
                return content;
            };

        return callback.apply(null, [this, ...arguments]);
    }

    selectTab(e, tabId) {
        e.preventDefault();
        this.updateTab(tabId);
    }

    render() {

        const {tabs} = this.props;

        return (
            <div id="learn-press-course-tabs">asdasdasda
                <ul className="learn-press-nav-tabs course-nav-tabs">
                    {
                        Object.keys(tabs).map((tabId) => {
                            const theTab = tabs[tabId];
                            const tabClass = ['course-nav', 'course-nav-tab-' + tabId];

                            if (this.state.activeTab === tabId) {
                                tabClass.push('active')
                            }

                            return (
                                <li className={ tabClass.join(' ') } key={ theTab.id }>
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
                        if (this.state.activeTab !== tabId) {
                            return;
                        }

                        const theTab = tabs[tabId];
                        const tabClass = ['course-tab-panel-' + tabId, 'course-tab-panel active'];
                        const TabContent = window[theTab.callback] || function () {
                                return '<!-- No content --> NO CONTENT';
                            }

                        return this.state.activeTab === tabId &&
                            <div className={ tabClass.join(' ') } id={ theTab.id } key={ theTab.id }>
                                <TabContent tabs={ this } key={ theTab.id }/>
                            </div>
                    })
                }

                {Template.get('single-course/tabs')}

            </div>
        )
    }
}

export default compose([
    withSelect((select) => {
        const {getTabs} = select('course-learner/course');

        return {
            tabs: getTabs()
        }
    })
])(CourseTabs);