import {Component} from '@wordpress/element';
import {compose} from '@wordpress/compose';
import {withSelect, withDispatch} from '@wordpress/data';
import {Template} from '@learnpress/components';
import {PlayerConsumer} from '../../../course-learner/player';

class PlayerLanding extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            message: '[LANDING]'
        }

        this.enrollCourse = this.enrollCourse.bind(this);
    }

    enrollCourse() {
        this.props.enrollCourseX({
            userId: 10,
            courseId: 1000
        })
        // this.props.enrollCourse({
        //     userId: 10,
        //     courseId: 1000
        // })
    }

    componentDidMount() {

    }

    openItem(item) {
        console.log(item)
    }

    render() {
        const openItem = this.openItem;
        return <>
        <h4>{this.state.message}</h4>
        {/*{ JSON.stringify(this.props.completeItems )}*/}

        {
            Template.get('/single-course/content-landing.js', {
                ...this.props,
                enrollCourse: this.enrollCourse,
                openItem
            })
        }

        </>
    }
}

export default compose([
    withSelect((select) => {
        const {
            isRequestingEnrollCourse,
            getCompletedItems
        } = select('course-learner/course');

        return {
            isRequestingEnrollCourse: isRequestingEnrollCourse(),
            completeItems: getCompletedItems()
        }
    }),

    withDispatch((dispatch) => {
        const {
            enrollCourseX
        } = dispatch('course-learner/course')

        return {
            enrollCourseX
        }
    })
])(PlayerLanding);