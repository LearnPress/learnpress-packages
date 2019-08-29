import toast from 'toasted-notes';
import {dispatch} from '@wordpress/data';
import {boundMethods} from '@learnpress/utils';
import './store';

const {Component} = wp.element;
const {compose} = wp.compose;
const {withSelect, withDispatch} = wp.data;

class Notices extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            currentCounter: 0,
            willDismiss: []
        }

        boundMethods(this, ['addNotice'], 'willDismiss')

        // this.addNotice = this.addNotice.bind(this);
        // this.willDismiss = this.willDismiss.bind(this);
    }

    addNotice() {
        const id = this.state.currentCounter + 1;
        this.props.addNotice({
            message: 'Hello #' + id,
            type: 'notice',
            id: '#' + id
        });

        this.setState({
            currentCounter: id
        });

        toast.notify('Hi');

    }

    willDismiss(id) {
        // this.setState({
        //     willDismiss: [...this.state.willDismiss, id]
        // })
    }

    render() {
        const {
            notices,
            autoDismiss
        } = this.props;


        return <div id="learn-press-notices">
            {notices && <ul>
                {notices.map((notice) => {
                    this.willDismiss(notice.id)
                    return <li key={notice.id}>{notice.message}</li>
                })}
            </ul>}
            <button type="button" onClick={this.addNotice}>Add</button>
        </div>
    }
}

export function add() {
    const {
        addNotice
    } = dispatch('course-learner/notices');

    addNotice('Ahi');
}

export default compose([
    withSelect((select) => {
        return {
            notices: select('course-learner/notices').getNotices()
        }
    }),

    withDispatch((dispatch) => {
        const {
            addNotice,
            autoDismiss
        } = dispatch('course-learner/notices');

        return {
            addNotice,
            autoDismiss
        }
    })
])(Notices);