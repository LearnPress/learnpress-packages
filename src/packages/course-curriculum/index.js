//export {default as CourseCurriculum} from './curriculum';
export { default as Curriculum } from './curriculum';
const {Component} = wp.element;

class CourseCurriculum extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        const {userData} = this.props;
        return <>
        <ul>
            {console.time('X')}
            {
                !!userData && Object.values(userData.items).map((item) => {
                    return <li>
                        <a>{item.name} [#{item.userSettings.item_id}]</a>
                    </li>
                })
            }
            {console.timeEnd('X')}
        </ul>
        </>
    }
}
export default CourseCurriculum;