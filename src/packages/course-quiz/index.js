import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import {QuestionContent, QuestionList, Buttons} from './components';
import {Template} from '@learnpress/components';
const {inArray} = 'losdash';

export * from './components';

class CourseQuiz extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            currentPage: 1
        }
    }

    setPage = () => (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    render() {
        const {
            item,
            status,
            questionPagination,
            navType,
            currentPage
        } = this.props;

        const questions = Object.values(item.questions);
        const notStarted = ['started', 'completed'].indexOf(status) === -1;
        const totalQuestion = questions.length;
        const totalTime = '10 minute';
        const attempts = 10;
        const passingGrade = '80%';

        let numberPages;

        if (questions) {
            if (1 === questionPagination) {
                numberPages = questions.length;
            } else if (1 < questionPagination) {
                numberPages = lodash.chunk(questions, questionPagination).length;
            }
        }

        const childProps = {
            ...this.props,
            questions,
            numberPages,
            currentPage: this.state.currentPage,
            setPage: this.setPage()
        }

        return (
            <div>
                <div>
                    {questions.length} | { status }
                </div>
                {
                    notStarted && Template.get('single-course/quiz/meta.js', {
                        totalQuestion,
                        totalTime,
                        attempts,
                        passingGrade
                    })
                }

                {
                    ['started', 'completed'].indexOf(status) !== -1 && (
                        <QuestionList { ...childProps }/>
                    )
                }


                <Buttons { ...childProps } />

            </div>
        )
    }
}

export default compose([
    withSelect((select, {item}) => {
        const {
            getItemStatus,
        } = select('course-learner/user');

        return {
            status: getItemStatus(item.id),
            questionPagination: 1,
            navType: 'prevNext'
        }
    }),
    withDispatch((dispatch, {item}) => {
        const {
            startQuiz,
            submitQuiz
        } = dispatch('course-learner/user');

        return {
            startQuiz,
            submitQuiz: function () {
                submitQuiz(item.id)
            }
        }
    })
])(CourseQuiz);