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

        this.setState({
            status: 'started'
        });

        this.props.startQuiz(1, 2, 3)
    }

    navQuiz = (x) => (event) => {
        event.preventDefault();
        console.log(event, x)
    }

    submitQuiz = (event) => {
        event.preventDefault();

        this.setState({
            status: 'completed'
        })
    }

    redoQuiz = (event) => {
        event.preventDefault();
        this.setState({
            status: 'started'
        });

        this.props.startQuiz(1, 2, 3)

    }

    startedButtons() {

        const {
            item,
            isCompletedItem,
            markItemIncomplete,
            completeItem
        } = this.props;

        console.log(this.props)
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
        } = this.state;
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

export default compose([
    withSelect((select) => {
        const {
            x
        } = select('course-learner/course');

        return {
            x
        }
    }),
    withDispatch((dispatch) => {
        const {
            startQuiz
        } = dispatch('course-learner/course');

        return {
            startQuiz
        }
    })
])(Buttons);