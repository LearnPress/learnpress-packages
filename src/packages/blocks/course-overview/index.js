import {withDispatch, withSelect} from '@wordpress/data';
import {compose} from '@wordpress/compose';

class CourseOverview extends wp.element.Component{
    render(){
        return <>
        {
            LP.components.Template.get('single-course/tabs/tab-overview.js', {...this.state, ...this.props})
        }
        </>
    }
}

export default compose([
    withSelect((select) => {
        const {getCourseOverview} = select('course-learner/course');
        return {
            overview: getCourseOverview()
        }
    })
])(CourseOverview);