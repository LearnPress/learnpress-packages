const {__} = wp.i18n;

export default function (props) {
    const {
        totalQuestion,
        totalTime,
        attempts,
        passingGrade
    } = props;

    return (
        <div className="quiz-meta">
            <div>
                <strong>{ __('Time', 'learnpress') }</strong>
                { totalTime }
            </div>
            <div>
                <strong>{ __('Questions', 'learnpress') }</strong>
                { totalQuestion }
            </div>
            <div>
                <strong>{ __('Attempts', 'learnpress') }</strong>
                { attempts }
            </div>
            <div>
                <strong>{ __('Passing Grade', 'learnpress') }</strong>
                { passingGrade }
            </div>
        </div>
    )

}