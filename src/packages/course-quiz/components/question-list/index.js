import {Component} from '@wordpress/element';
import {QuestionContent as X} from '../question-content';

/**
 * Render all questions in single page.
 *
 * @param props
 * @return {XML}
 * @constructor
 */
export const ShowAllQuestions = (props) => {
    const {
        questions
    } = props;

    return (
        <div>
            <ul className="question-list">
                {
                    questions.map((question) => {
                        return <li key={ `question-${question.id}` }>
                            <LoopQuestionContent { ... {...props, question} } />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export const ShowOrHideQuestion = (props) => {
    const {
        question,
        isCurrent
    } = props;

    return <li>
        <LoopQuestionContent {...props} />
    </li>
}

/**
 * @param props
 * @return {XML}
 * @constructor
 */
export const ShowQuestionsWithPagination1 = (props) => {
    const {
        questions,
        numberPages,
        currentPage
    } = props;

    return (
        <div>
            <div>
                Question { currentPage } of { numberPages }
            </div>
            <ul className="question-list">
                {
                    questions.map((question, index) => {
                        const isCurrent = currentPage === (index + 1);
                        // return currentPage === (index + 1) ? <li key={ `question-${question.id}` }>
                        //     <LoopQuestionContent { ... { ...props, question } } />
                        // </li> : ''

                        return <li key={ `question-${question.id}` } style={ {display: isCurrent ? '' : 'none'} } >
                            <LoopQuestionContent { ... {
                                ...props,
                                question,
                                isCurrent
                            } } key={ `question-${question.id}` }/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export const ShowQuestionsWithPaginationN = (props) => {
    const {
        questions,
        questionPagination,
        numberPages,
        currentPage
    } = props;

    const chunks = lodash.chunk(questions, questionPagination);
    const start = (currentPage - 1) * questionPagination;
    const end = start + questionPagination > questions.length ? questions.length : start + questionPagination;

    return (
        <div>
            <div>
                Page { currentPage } of { numberPages } / Question { start + 1 } to { end } of { questions.length }
            </div>
            <ul>
                {
                    chunks.map((questions, pageIndex) => {
                        return (
                            currentPage === pageIndex + 1 ?
                                <li key={ `page-${pageIndex}` }>
                                    <ul className="question-list">
                                        {
                                            questions.map((question) => {
                                                return <li key={ `question-${question.id}` }>
                                                    <LoopQuestionContent { ... {...props, question} } />
                                                </li>
                                            })
                                        }
                                    </ul>
                                </li>
                                : ''
                        )
                    })
                }
            </ul>
        </div>
    )
};

export const LoopQuestionContent = (props) => {
    const {QuestionContent} = LP.courseQuiz;

    console.log(X)
    return <QuestionContent {...props} />
}


class QuestionList extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            questionPagination: 1,
            navType: 'numbers',
            currentPage: 1,
        }
    }

    render() {
        const {
            questions,
            questionPagination,
        } = this.props;

        return (<>

        {questionPagination}
        {
            questions && !questionPagination && <ShowAllQuestions { ...this.props } />
        }

        {
            questions && 1 === questionPagination &&
            <ShowQuestionsWithPagination1 { ...this.props }/>
        }

        {
            questions && 1 < questionPagination &&
            <ShowQuestionsWithPaginationN { ...this.props }/>
        }
        </>)
    }
}

export default QuestionList;