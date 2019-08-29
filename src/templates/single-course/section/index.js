const {isNumber} = lodash;
const {setUrl} = LP.utils;

class CourseSection extends wp.element.Component {
    isCurrentItem(itemId) {
        const {
            activeCourseItem
        } = this.props;

        return !!activeCourseItem && (activeCourseItem.id == itemId)
    }

    isCompletedItem(itemId) {
        const {
            completedItems
        } = this.props;

        return completedItems && completedItems[itemId]
    }

    openCourseItem(item){
        const {
            openCourseItem,
        } = this.props;

        openCourseItem(item);

    }

    renderItem(item) {
        const {
            items
        } = this.props;

        if (isNumber(item)) {
            item = items[item];
        }

        if (!item) {
            return '';
        }

        const classes = ['course-item'];

        if (this.isCurrentItem(item.id)) {
            classes.push('active');
        }

        return (
            <div className={ classes.join(' ') } key={item.id}>
                <h6 className="item-title">
                    <a href={item.permalink} onClick={(e) => {
                        e.preventDefault();
                        this.openCourseItem(item)
                    }}>
                        {item.name}
                        {this.isCompletedItem(item.id) && <span>Completed</span>}
                    </a>
                </h6>
            </div>
        )
    }

    render() {
        const {
            section,
            clickSection,
            className
        } = this.props;

        section.items.map((item) => {
            if (this.isCurrentItem(item)) {
                className.push('active');
                return false;
            }
        })

        return (
            <div className={ className.join(' ') }>
                <h4 onClick={clickSection}>{section.title}</h4>
                <p>{ section.desc }</p>
                <div className="course-items">
                    {
                        section.items.map((item) => {
                            return this.renderItem(item)
                        })
                    }
                </div>
            </div>)
    }
}

export default CourseSection