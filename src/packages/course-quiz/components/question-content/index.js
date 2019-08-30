import {Component} from '@wordpress/element';

const {isEmpty} = lodash;

class QuestionContent extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            answers: []
        }

        this.$options = {};
    }

    getInputType = (type) => {
        return ['single_choice', 'true_or_false'].indexOf(type) !== -1 ? 'radio' : 'checkbox';
    };

    setCheckedOption = (optionId) => (event) => {
console.log(this.$options)
        const answers = Object.values(this.$options).map(($option)=>{
            if($option.checked){
                return $option.value
            }

            return false;
        }).filter((a)=>{return a});

        // const isChecked = event.target.checked;
        // const value = event.target.value;
        // const answered = this.state.answers;
        //
        // if (isChecked) {
        //     if (answered.indexOf(value) === -1) {
        //         answered.push(value);
        //     }
        // } else {
        //     const at = answered.indexOf(value);
        //     if (at !== -1) {
        //         answered.splice(at, 1);
        //     }
        // }

        this.setState({
            answers: answers
        });
    };

    isChecked = (option) => {
        return this.state.answers.indexOf(option.value) !== -1
    };


    render() {
        const {
            question,
            isCurrent
        } = this.props;

        const options = !isEmpty(question.options) ? Object.values(question.options) : [];

        return isCurrent ? (
            <>
            <h6>{ question.title }</h6>
            <div dangerouslySetInnerHTML={ {__html: question.content} }/>
            { JSON.stringify(this.state) }
            {
                options.length && (
                    <ul>
                        {
                            options.map((option) => {
                                return (
                                    <li key={ `answer-option-${option.question_answer_id}` } >
                                        <label>
                                            <input type={ this.getInputType(question.type) }
                                                   name={ `answer-option-${question.id}` }
                                                   value={ option.value }
                                                   checked={ this.isChecked(option) }
                                                   ref={(el)=>{ this.$options[option.question_answer_id] = el}}
                                                   onChange={ this.setCheckedOption(option.question_answer_id) }/>
                                            <div>{ option.text }</div>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
            </>
        ) : ''
    }
}

export default QuestionContent;