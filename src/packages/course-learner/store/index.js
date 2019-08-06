import {registerStore} from '@wordpress/data';

import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

const store = registerStore('course-learner/index', {
    reducer,
    selectors,
    actions,
});

export default store;