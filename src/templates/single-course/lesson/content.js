const {Component} = wp.element;

class LessonContent extends Component {
    constructor() {
        super(...arguments)
    }

    updateCount() {
        const count = this.state.count + 1;

        this.setState({count: count});
        console.log(this.state, count)
    }

    render() {
        return <div>
            Lorem ispul content
        </div>
    }
}

export default LessonContent;