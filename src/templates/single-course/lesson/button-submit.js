const {Component} = wp.element;

class ButtonSubmit extends Component {
    constructor() {
        super(...arguments)

        this.state = {
            status: 'Complete'
        }

        this.updateButton = this.updateButton.bind(this);
    }

    updateButton() {
        this.setState({status: 'Completed'});
    }

    render() {
        return <button type="button" onClick={this.updateButton}>{this.state.status}</button>
    }
}

export default ButtonSubmit;