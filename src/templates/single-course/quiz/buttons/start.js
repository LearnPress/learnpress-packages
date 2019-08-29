const {Component} = wp.element;
const { __ } = wp.i18n;

class ButtonStart extends Component {
    constructor() {
        super(...arguments)

        this.state = {
            status: 'Start'
        }

        this.updateButton = this.updateButton.bind(this);
    }

    startQuiz = () => (event) =>{
        event.preventDefault();
    }

    render() {
        return <button type="button" onClick={this.startQuiz}>{ __('Start', 'learnpress') }</button>
    }
}

export default ButtonStart;