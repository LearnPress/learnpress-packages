import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import {Template} from '@learnpress/components';

class PlayerLanding extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            message: '[LANDING]'
        }

        this.enrollCourse = this.enrollCourse.bind(this);
    }

    enrollCourse() {
        this.props.enrollCourse({
            userId: 10,
            courseId: 1000
        })
    }

    componentDidMount() {

    }

    render() {

        return <>
        <h4>{this.state.message}</h4>
        {
            Template.get('/single-course/content-landing.js', {
                enrollCourse: this.enrollCourse
            })
        }
        </>
    }
}

export default compose([
    withSelect((select) => {

    }),

    withDispatch((dispatch) => {
        const {
            enrollCourse
        } = dispatch('course-learner/course')

        return {
            enrollCourse
        }
    })
])(PlayerLanding);