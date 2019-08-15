import {compose} from '@wordpress/compose';
import {Component, createContext} from '@wordpress/element';
import {withDispatch, withSelect} from '@wordpress/data';

import PlayerMode from './components/player-mode';
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
        const {initUserData, settings} = this.props;
        this.props.setUserData(initUserData);
        this.props.setCourseData(settings);
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

                    {this.props.accessLevel >= 20 && <PlayerLearning {...this.props}/>}

                    {this.props.accessLevel < 20 && <PlayerLanding {...this.props}/>}

                </PlayerMode>
            </Provider>
        )
    }
}

export {Consumer};

//export default Player;
export default compose(
    withSelect((select) => {
        const {
            getUserData,
            getAccessLevel
        } = select('course-learner/course');

        return {
            userData: getUserData(),
            accessLevel: getAccessLevel(),
            playerMode: false
        };
    }),
    withDispatch((dispatch) => {
        const {
            setUserData,
            setItemData,
            setCourseData
        } = dispatch('course-learner/course');

        return {
            setUserData,
            setItemData,
            setCourseData
        };
    }),
)(Player);