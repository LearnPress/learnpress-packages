import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withDispatch, withSelect} from '@wordpress/data';
import {Template} from '@learnpress/components';

class PlayerLearning extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            message: '[LEARNING]'
        }

        this.leaveCourse = this.leaveCourse.bind(this);

    }

    leaveCourse() {
        this.props.leaveCourse({
            userId: 10,
            courseId: 1000
        })
    }

    render() {
        return <>
        <h4>{this.state.message}</h4>
        {
            Template.get('/single-course/content-learning.js', {
                ...this.props
            })
        }
        </>
    }
}

export default compose([
    withDispatch((dispatch) => {
        const {
            leaveCourse
        } = dispatch('course-learner/course');

        return {
            leaveCourse
        }
    })
])(PlayerLearning);