const {hooks} = LP.utils;
const {compose} = wp.compose;
const {Component} = wp.element;
const {withSelect} = wp.data;
const {pickBy, isEmpty} = lodash;

class CourseTabs extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            activeTab: ''
        }

        hooks.addFilter('course-tab-content', this.tabContent.bind(this));

        this.isActiveTab = this.isActiveTab.bind(this);
        this.selectTab = this.selectTab.bind(this);
        //this.tabContent = this.tabContent.bind(this);
    }

    getDefaultTabId(tabs) {
        tabs = tabs || this.props.tabs;

        // Pick the tab is active
        let activeTabs = pickBy(tabs, 'active');

        if (isEmpty(activeTabs)) {
            activeTabs = tabs;
        }

        // Get the first tab if there is more than one.
        return Object.keys(activeTabs)[0];
    }

    componentDidMount() {
        this.componentWillReceiveProps(this.props.tabs)
    }

    /**
     * Update active tab when component receive props.
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        if (this.state.activeTab) {
            return;
        }

        this.setState(() => {
            return {activeTab: this.getDefaultTabId(nextProps.tabs)}
        })


        console.log('???', this.getDefaultTabId(nextProps.tabs))
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
    }

    tabContent(content, tabId, theTab) {
        const callback = window[theTab.callback] || function () {
                return content;
            }

        return callback.apply(null, [this, ...arguments]);
    }

    selectTab(e, tabId) {
        e.preventDefault();
        this.updateTab(tabId);
    }

    isActiveTab(tabId) {
        return this.state.activeTab === tabId;
    }

    /**
     * Display content of the tab.
     *
     * @param theTab
     * @param $ins
     * @return {XML}
     */
    displayTab(theTab, $ins) {
        const TabContent = window[theTab.callback] || function () {
                return ''
            };

        return <TabContent tabs={ $ins }/>
    }

    render() {

        const {tabs} = this.props;
        const {Template} = LP.components;
        const templateProps = {
            ...this.props,
            tabs,
            isActiveTab: this.isActiveTab,
            selectTab: this.selectTab,
            displayTab: this.displayTab
        }

        return <>
        {Template.get('single-course/tabs', templateProps)}
        </>
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