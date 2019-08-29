import {registerStore} from '@wordpress/data';

import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import applyMiddlewares from './middlewares';

const {controls: dataControls} = LP.dataControls;

const store = registerStore('course-learner/user', {
    reducer,
    selectors,
    actions,
    controls: {
        ...dataControls
    }
});

/// sdf sdfsdf s
applyMiddlewares(store);

export default store;