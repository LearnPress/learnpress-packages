import {Component} from '@wordpress/element';
import PrettyJSON from '../../../components/pretty-json';
// import PlayerLanding from './player-landing';
// import PlayerLearning from './player-learning';

export {default as PlayerLanding} from './player-landing';
export {default as PlayerLearning} from './player-learning';

class PlayerMode extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        const {
            children,
            userData
        } = this.props;

        return (
            <div className="course-player">
                { children }
            </div>
        )
    }
}

export default PlayerMode;