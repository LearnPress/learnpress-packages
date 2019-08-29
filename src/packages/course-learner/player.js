import {compose} from '@wordpress/compose';
import {Component, createContext} from '@wordpress/element';
import {withDispatch, withSelect} from '@wordpress/data';

import PlayerMode from './components/player-mode';
import {PlayerLanding, PlayerLearning} from './components/player-mode';
import Notices from '@learnpress/notices';

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
        this.props.setUserData(settings.userData);
        this.props.setCourseData(settings);
    }

    render() {
        const {
            children,
            settings,
            courseId,
            userData,
            openCourseItem,
            closeCourseItem
        } = this.props;

        const classes = [];

        if (openCourseItem) {
            classes.push('isOpenItem')
        }

        return (
            <div id="course-player" className={classes.join(' ')}>

                <Provider value={ {...this.props} }>
                    <PlayerMode>
                        [[[>{JSON.stringify(openCourseItem)}]]]

                        {this.props.accessLevel >= 20 && <PlayerLearning {...this.props}/>}

                        {this.props.accessLevel < 20 && <PlayerLanding {...this.props}/>}


                        <Notices/>

                    </PlayerMode>
                </Provider>
            </div>
        )
    }
}

export const PlayerConsumer = Consumer;

//export default Player;
export default compose(
    withSelect((select) => {
        const {
            getUserData,
            getAccessLevel,
            isOpeningCourseItem
        } = select('course-learner/course');

        return {
            userData: getUserData(),
            accessLevel: getAccessLevel(),
            openCourseItem: isOpeningCourseItem(),
            playerMode: false
        };
    }),
    withDispatch((dispatch) => {
        const {
            setItemData,
            setCourseData,
            closeCourseItem
        } = dispatch('course-learner/course');

        const {
            setUserData
        } = dispatch('course-learner/user');

        return {
            setUserData,
            setItemData,
            setCourseData,
            closeCourseItem
        };
    }),
)(Player);