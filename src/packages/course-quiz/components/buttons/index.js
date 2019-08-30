import {Component} from '@wordpress/element';
import {withDispatch, withSelect} from '@wordpress/data';
import {compose} from '@wordpress/compose';
import {boundMethods} from '@learnpress/utils';

export const navPrevNext = (props) => {
    const {
        numberPages,
        onChange
    } = props;

    return numberPages > 1 ? (
        <div className="question-number-list">
            <button onClick={ onChange('prev') }>Prev</button>
            <button onClick={ onChange('next') }>Next</button>
        </div>
    ) : ''
}

export const navNumbers = (props) => {
    const {
        numberPages,
        onChange
    } = props;

    return numberPages > 1 ? (
        <div className="question-number-list">
            {
                Array.from(Array(numberPages).keys()).map((i) => {
                    return <button key={ `page-${i}` } onClick={ onChange(i + 1) }>{ i + 1 }</button>
                })
            }
        </div>
    ) : ''
}

class Buttons extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            status: ''
        }
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
            navType,
            currentPage,
            numberPages,
            setPage
        } = this.props;

        return (
            <>
            {
                navType === 'numbers' && navNumbers({
                    numberPages: numberPages,
                    onChange: (newPage) => (event) => {
                        setPage(newPage);
                    }
                })
            }

            {
                navType === 'prevNext' && navPrevNext({
                    numberPages: numberPages,
                    onChange: (nav) => () => {
                        if (nav !== 'next') {
                            setPage(currentPage === 1 ? numberPages : currentPage - 1)
                        } else {
                            setPage(currentPage === numberPages ? 1 : currentPage + 1);
                        }
                    }
                })
            }

            <button onClick={ this.submitQuiz }>Submit</button>
            </>
        )
    }

    render() {
        const {
            status,
            navType
        } = this.props;

        const className = ['quiz-buttons', navType];

        return (
            <div className={ className.join(' ') }>

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
            </div>
        )
    }
}

export default Buttons;