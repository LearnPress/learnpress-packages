const {isNumber} = lodash;

class CourseSection extends wp.element.Component {
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
        const {
            section,
            clickSection,
            renderItem,
            className
        } = this.props;

        return (
            <div className={ className.join(' ') }>
                <h4 onClick={clickSection}>{section.title}</h4>
                <div className="course-items">
                    {
                        section.items.map((item) => {
                            return <div className="course-item">
                                {renderItem(item)}
                            </div>
                        })
                    }
                </div>
            </div>)
    }
}

export default CourseSection