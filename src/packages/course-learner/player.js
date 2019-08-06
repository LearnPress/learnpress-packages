import {compose} from '@wordpress/compose';
import {Component, createContext} from '@wordpress/element';
import {withDispatch, withSelect} from '@wordpress/data';

import PlayerMode from './components/player-mode';
import CourseProgress from '@learnpress/course-progress';
import CourseCurriculum from '@learnpress/course-curriculum';
import PrettyJSON from '../components/pretty-json';
import {PlayerLanding, PlayerLearning} from './components/player-mode';
import './store';

const {random} = window.lodash;

const {
    Provider,
    Consumer
} = createContext(() => {
});

class Player extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const {initUserData} = this.props;
        this.props.setUserData(initUserData);
    }

    render() {
        const {
            children,
            settings,
            courseId,
            userData
        } = this.props;

        return (
            <Provider value={ this.props }>
                <PlayerMode>

                    {!this.props.playerMode && <PlayerLanding {...this.props}/>}
                    {this.props.playerMode && <PlayerLearning />}

                    <CourseCurriculum {...this.props}/>
                    <CourseProgress />
                </PlayerMode>
            </Provider>
        )
    }
}
//export default Player;
export default compose(
    withSelect((select) => {
        const {
            getUserData,
        } = select('course-learner/index');

        return {
            userData: getUserData(),
            playerMode: false
        };
    }),
    withDispatch((dispatch) => {
        const {
            setUserData,
            setItemData
        } = dispatch('course-learner/index');

        return {
            setUserData,
            setItemData,
        };
    }),
)(Player);
