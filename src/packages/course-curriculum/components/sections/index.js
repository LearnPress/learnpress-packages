import {compose} from '@wordpress/compose';
import {withDispatch, withSelect} from '@wordpress/data';

const {Component} = wp.element;
const {isNumber} = lodash;

class CourseSection extends Component {
    constructor() {
        super(...arguments);

        this.clickSection = this.clickSection.bind(this);
        this.renderItem = this.renderItem.bind(this);

        this.state = {
            isOpen: true
        }
    }

    clickSection() {
        this.setState({
            isOpen: !this.state.isOpen
        });

        console.log(this.state)
    }

    renderItem(item) {
        const {items} = this.props;

        if (isNumber(item)) {
            item = items[item];
        }

        if (!item) {
            return '';
        }

        return <h4 key={ item.id }>
            <a href={item.permalink}>{item.name}</a>
        </h4>
    }

    render() {
        const {section} = this.props;
        const className = ['course-section'];

        if (!this.state.isOpen) {
            className.push('closed');
        }

        // Props used in template
        const props = {
            ...this.props,
            clickSection: this.clickSection,
            renderItem: this.renderItem,
            className
        }

        return <div key={ section.id }>
            {LP.components.Template.get('single-course/section', props)}
        </div>
    }
}

export default compose([
    withSelect((select) => {
        const {
            getCompletedItems,
            isOpeningCourseItem
        } = select('course-learner/course');

        return {
            completedItems: getCompletedItems(),
            activeCourseItem: isOpeningCourseItem()
        }
    }),

    withDispatch((dispatch) => {
        const {
            openCourseItem
        } = dispatch('course-learner/course');

        return {
            openCourseItem
        }
    })
])(CourseSection);