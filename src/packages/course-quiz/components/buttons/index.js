import {Component} from '@wordpress/element';
import {withDispatch, withSelect} from '@wordpress/data';
import {compose} from '@wordpress/compose';
import {boundMethods} from '@learnpress/utils';

class Buttons extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            status: ''
        }

        // boundMethods(this, ['startQuiz', 'navQuiz', 'submitQuiz', 'redoQuiz'])
    }


    startQuiz = (event) => {
        event.preventDefault();

        this.props.startQuiz(this.props.item.id)
    }

    navQuiz = (x) => (event) => {
        event.preventDefault();
        console.log(event, x)
    }

    submitQuiz = (event) => {
        event.preventDefault();

        this.props.submitQuiz()
    }

    redoQuiz = (event) => {
        event.preventDefault();

        this.props.startQuiz(this.props.item.id)

    }

    startedButtons() {

        const {
            item,
            isCompletedItem,
            markItemIncomplete,
            completeItem
        } = this.props;

        return (
            <>
            <button onClick={ this.navQuiz('prev') }>Prev</button>
            <button onClick={ this.navQuiz('next') }>Next</button>
            <button onClick={ this.submitQuiz }>Submit</button>
            </>
        )
    }

    render() {
        const {
            status
        } = this.props;

        return (
            <div>

                {
                    !status &&
                    <button onClick={ this.startQuiz }>Start</button>
                }

                {
                    status === 'started' && this.startedButtons()
                }

                {
                    status === 'completed' &&
                    <button onClick={ this.redoQuiz }>Redo</button>
                }
                {JSON.stringify(this.props.item)}
            </div>
        )
    }
}

export default Buttons;