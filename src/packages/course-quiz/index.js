import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import {QuestionList, Buttons} from './components';
import {Template} from '@learnpress/components';
const {inArray} = 'losdash';

class CourseQuiz extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            item,
            status
        } = this.props;

        const questions = Object.values(item.questions);
        const notStarted = ['started', 'completed'].indexOf(status) === -1;
        const totalQuestion = questions.length;
        const totalTime = '10 minute';
        const attempts = 10;
        const passingGrade = '80%';

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
                        <QuestionList { ...{ ...this.props, questions } }/>
                    )
                }


                <Buttons {...this.props} />

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
            questionPagination: 1
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