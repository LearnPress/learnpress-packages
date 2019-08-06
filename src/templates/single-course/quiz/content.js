const {Component} = wp.element;

class QuizContent extends Component {
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
            QUiz content
        </div>
    }
}

export default QuizContent;