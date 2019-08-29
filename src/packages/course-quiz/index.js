import {Component} from '@wordpress/element';
import {QuestionList, Buttons} from './components';

const {inArray} = 'losdash';

class CourseQuiz extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            item
        } = this.props;

        const {
            status
        } = item;

        const questions = Object.values(item.questions);

        return (
            <div>
                <div>
                    {questions.length}
                </div>
                {
                    ['started', 'completed'].indexOf(status) !== -1 && (
                        <QuestionList questions={ questions }/>
                    )
                }

                <Buttons item={ item } {...this.props} />

            </div>
        )
    }
}

export default CourseQuiz;