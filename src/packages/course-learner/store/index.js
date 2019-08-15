import {registerStore} from '@wordpress/data';

import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

const store = registerStore('course-learner/course', {
    reducer,
    selectors,
    actions,
});

export default store;