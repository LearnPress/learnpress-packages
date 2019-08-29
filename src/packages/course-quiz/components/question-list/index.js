import {Component} from '@wordpress/element';

export const showAllQuestions = (props) => {
    const {
        questions
    } = props;

    return (
        <div>
            <ul className="question-list">
                {
                    questions.map((question) => {
                        return <li key={ question.id }>{ question.title }</li>
                    })
                }
            </ul>

            {
                navPrevNext({
                    onChange: function () {

                    }
                })
            }
        </div>
    )
}

export const ShowQuestionsWithPagination1 = (props) => {
    const {
        questions,
        questionPagination,
        navType
    } = props;

    const [page, setPage] = useState(0);

    return (
        <div>
            <ul className="question-list">
                {
                    questions.map((question) => {
                        return <li key={ question.id }>{ question.title }</li>
                    })
                }
            </ul>

            {
                navType === 'numbers' && navNumbers({
                    numberPages: questions.length,
                    onChange: function () {

                    }
                })
            }

            {
                navType === 'prevNext' && navPrevNext({
                    onChange: function () {

                    }
                })
            }
        </div>
    )
}

export const ShowQuestionsWithPaginationN = (props) => {
    const {
        questions,
        questionPagination,
        navType
    } = props;

    const chunks = lodash.chunk(questions, questionPagination);

    return (
        <div>
            <ul>
                {
                    chunks.map((questions, i) => {
                        return (
                            <li key={ `page-${i}` }>
                                <ul className="question-list">
                                    {
                                        questions.map((question) => {
                                            return <li key={ `question-${question.id}` }>{ question.title }</li>
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
            {
                navType === 'numbers' && navNumbers({
                    numberPages: chunks.length,
                    onChange: function () {

                    }
                })
            }

            {
                navType === 'prevNext' && navPrevNext({
                    onChange: function () {

                    }
                })
            }
        </div>
    )
}

export const navPrevNext = (props) => {
    const {
        onChange
    } = props;

    return (
        <div className="question-number-list">
            <button onClick={ onChange('prev') }>Prev</button>
            <button onClick={ onChange('next') }>Next</button>
        </div>
    )
}

export const navNumbers = (props) => {
    const {
        numberPages,
        onChange
    } = props;

    return (
        <div className="question-number-list">
            {
                Array.from(Array(numberPages).keys()).map((i) => {
                    return <span key={ `page-${i}` } onClick={ onChange(i + 1) }>{ i + 1 }</span>
                })
            }
        </div>
    )
}


class QuestionList extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            questionPagination: 0,
            navType: 'numbers'
        }
    }

    setPagination = () => (event) => {
        event.preventDefault();
        this.setState({
            questionPagination: parseInt(this.$questionPagination.value)
        })
    }

    setNav = () => (event) => {
        event.preventDefault();
        this.setState({
            navType: this.$navType.value
        })
    }

    render() {
        const {
            questions
        } = this.props;

        const {
            questionPagination,
            navType
        } = this.state;

        return (<>
        <input type="number" defaultValue="1" ref={ (elem) => {
            this.$questionPagination = elem
        }}/>
        <button onClick={ this.setPagination() }>Set Pagination</button>
        <select ref={ (elem) => {
            this.$navType = elem
        }}>
            <option value="numbers">Numbers</option>
            <option value="prevNext">Prev/Next</option>
        </select>
        <button onClick={ this.setNav() }>Set Nav</button>

        {questionPagination}
        {
            questions && !questionPagination && showAllQuestions({...this.props, questionPagination, navType})
        }

        {
            questions && 1 === questionPagination &&
            <ShowQuestionsWithPagination1 { ...{...this.props, questionPagination, navType} }/>
        }

        {
            questions && 1 < questionPagination &&
            <ShowQuestionsWithPaginationN { ...{...this.props, questionPagination, navType} }/>
        }
        </>)
    }
}

export default QuestionList;