import LessonContent from "./content";
import ButtonSubmit from "./button-submit";

const {Component} = wp.element;

class Lesson extends Component {
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
            <LessonContent />
            <ButtonSubmit />
        </div>
    }
}

export default Lesson;