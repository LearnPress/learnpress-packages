const {Component} = wp.element;

class SubmitButton extends Component {
    constructor() {
        super(...arguments)

        this.state = {
            count: 0
        }

        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        const count = this.state.count + 1;

        this.setState({count: count});
        console.log(this.state, count)
    }

    render() {
        return <button type="button" onClick={this.updateCount}>Submit Course ({this.state.count})!</button>
    }
}

export default SubmitButton;