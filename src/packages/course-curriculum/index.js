//export {default as CourseCurriculum} from './curriculum';
export * from './components';
const {Component} = wp.element;
import {withDispatch, withSelect} from '@wordpress/data';
import {compose} from '@wordpress/compose';

class CourseCurriculum extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            x: 0
        }
    }

    render(){
        const {userData} = this.props;
        return <>
        {
            LP.components.Template.get('single-course/tabs/tab-curriculum.js', {...this.state, ...this.props})
        }
        </>
    }
}

export default compose([
    withSelect((select) => {
        const {getCourseSections, getUserItems} = select('course-learner/course');
        return {
            sections: getCourseSections(),
            items: getUserItems()
        }
    })
])(CourseCurriculum);