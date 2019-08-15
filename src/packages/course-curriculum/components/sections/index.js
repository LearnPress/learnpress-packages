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

        return <h4>
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

        return <>
        {LP.components.Template.get('single-course/section', props)}
        </>
    }
}

export default CourseSection