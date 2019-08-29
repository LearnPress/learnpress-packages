import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import CourseCurriculum from '@learnpress/course-curriculum';
import {hooks, setUrl, boundMethods} from '@learnpress/utils';

//const {CourseCurriculum} = LP.courseCurriculum;
class CoursePopup extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            currentPermalink: window.location.href
        }

        boundMethods(this, ['isCompletedItem', 'completeItem', 'markItemIncomplete']);
    }

    componentDidMount() {
        const {
            openCourseItem
        } = this.props;

        if (!this.needFetchItem() || !openCourseItem) {
            return;
        }

        this.fetchItem(openCourseItem);
    }

    componentWillReceiveProps(nextProps, context) {

        const {
            openCourseItem
        } = this.props;

        if (openCourseItem && nextProps.openCourseItem.id == openCourseItem.id) {
            return;
        }

        this.fetchItem(nextProps.openCourseItem);
    }

    fetchItem(item) {
        const {
            fetchItem
        } = this.props;

        fetchItem(item.id);
        setUrl(item.permalink);
    }

    completeItem() {
        const {
            openCourseItem,
            completeItem
        } = this.props;

        completeItem(openCourseItem.id)
    }

    markItemIncomplete() {
        const {
            markItemIncomplete,
            openCourseItem,
        } = this.props;

        markItemIncomplete(openCourseItem.id)
    }

    isCompletedItem(itemId) {
        const {
            completedItems,
            openCourseItem,
        } = this.props;

        return completedItems && completedItems[itemId || openCourseItem.id];
    }

    needFetchItem() {
        const {
            currentItemResults,
            openCourseItem
        } = this.props;

        return (!currentItemResults || (currentItemResults.id != openCourseItem.id))
    }

    close() {
        this.props.closeCourseItem();
        if (this.state.currentPermalink) {
            if (this.props.coursePermalink === this.state.currentPermalink) {
                setUrl(this.state.currentPermalink);
            } else {
                setUrl(this.props.coursePermalink);
            }
        } else {
            setUrl(this.props.coursePermalink);
        }
    }

    render() {
        const {
            currentItemResults,
            openCourseItem
        } = this.props;

        return (
            <div id="course-popup">
                <div id="course-popup__header">
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.close();
                    }}>Close
                    </button>
                </div>
                <div id="course-popup__wrapper">
                    <div id="course-popup__sidebar">
                        <CourseCurriculum/>
                    </div>
                    <div id="course-popup__main">
                        {
                            !!currentItemResults && currentItemResults.id == openCourseItem.id &&
                            <div>
                                <h4 dangerouslySetInnerHTML={ {__html: currentItemResults.title} }/>
                                <div dangerouslySetInnerHTML={ {__html: currentItemResults.content} }/>
                                [Status: {!!this.isCompletedItem() ? "Completed" : "InCompleted"}]
                                {
                                    /**
                                     * Hook to allow append more content or do anything else
                                     */
                                    hooks.doAction('course-item-extra',
                                    currentItemResults, {
                                        isCompletedItem: this.isCompletedItem,
                                        markItemIncomplete: this.markItemIncomplete,
                                        completeItem: this.completeItem
                                    })
                                }
                            </div>

                        }
                        {
                            this.needFetchItem() &&
                            <div>Loading...</div>
                        }
                        {/*{JSON.stringify(currentItemResults)}*/}
                        {/*{JSON.stringify(openCourseItem)}*/}

                    </div>
                </div>
            </div>
        )
    }
}

export default compose([
    withSelect((select) => {
        const {
            isOpeningCourseItem,
            getCurrentItemResults,
            getCompletedItems,
            getCourseProp
        } = select('course-learner/course');

        return {
            openCourseItem: isOpeningCourseItem(),
            currentItemResults: getCurrentItemResults(),
            completedItems: select('course-learner/user').getCompletedItems(),
            coursePermalink: getCourseProp('coursePermalink')
        }
    }),

    withDispatch((dispatch) => {
        const {
            fetchItem,
            completeItem,
            markItemIncomplete,
            closeCourseItem
        } = dispatch('course-learner/course');

        return {
            fetchItem,
            completeItem,
            markItemIncomplete,
            closeCourseItem
        }
    })
])(CoursePopup);