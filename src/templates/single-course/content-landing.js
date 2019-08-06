const {Template} = LP.components;

export default class ContentLanding extends wp.element.Component {
    render() {
        return (
            <div className="learnpress-landing">
                HOW
                {Template.get('/single-course/tabs')}
                {Template.get('/single-course/buttons/enroll.js')}
            </div>
        )
    }
}