import ButtonStart from "./buttons/start";
import QuizContent from "./content";

const {Component} = wp.element;

class Quiz extends Component {
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
            <QuizContent />
            <ButtonStart/>
        </div>
    }
}

export default Quiz;