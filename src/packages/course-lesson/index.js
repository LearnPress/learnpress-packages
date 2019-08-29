import {Component} from '@wordpress/element';
import {withSelect, withDispatch} from '@wordpress/data';
import {compose} from '@wordpress/compose';
import {__} from '@wordpress/i18n';

class CourseLesson extends Component {
    constructor() {
        super(...arguments);
    }

    markItemComplete = (completed) => (event) => {
        const {
            item,
            markItemComplete
        } = this.props;

        markItemComplete(completed, item.id);
    }

    render() {
        const {
            isCompleted
        } = this.props;

        return (
            <div>
                {
                    !!isCompleted &&
                    <button onClick={ this.markItemComplete(false) }>{ __('Mark Incomplete', 'learnpress') }
                    </button>
                }

                {
                    !isCompleted &&
                    <button onClick={ this.markItemComplete() }>{ __('Mark Completed', 'learnpress') }
                    </button>
                }

            </div>
        )
    }
}
//export default CourseLesson;
export default compose(
    withSelect((select, {item}) => {
        const {
            isCompletedItem
        } = select('course-learner/user');

        return {
            isCompleted: isCompletedItem(item.id)
        }
    }),

    withDispatch((dispatch) => {
        const {
            markItemComplete,
        } = dispatch('course-learner/user');

        return {
            markItemComplete,
        }
    })
)(CourseLesson);