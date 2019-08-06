const {Component} = wp.element;

class ButtonStart extends Component {
    constructor() {
        super(...arguments)

        this.state = {
            status: 'Start'
        }

        this.updateButton = this.updateButton.bind(this);
    }

    updateButton() {
        this.setState({status: 'Started'});
    }

    render() {
        return <button type="button" onClick={this.updateButton}>{this.state.status}</button>
    }
}

export default ButtonStart;