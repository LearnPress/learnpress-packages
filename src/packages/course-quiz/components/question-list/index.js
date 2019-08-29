import {Component} from '@wordpress/element';

class QuestionList extends Component {
    render() {
        const {
            questions
        } = this.props;

        return (<>
        {
            questions && (
                <ul className="question-list">
                    {
                        questions.map((question) => {
                            return <li key={ question.id }>{ question.title }</li>
                        })
                    }
                </ul>
            )
        }
        </>)
    }
}

export default QuestionList;