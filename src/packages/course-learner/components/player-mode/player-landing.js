import {Component} from '@wordpress/element';
import Template from '../../../components/template';
const hooks = wp;

class PlayerLanding extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            message: 'Hello World!'
        }
    }

    componentDidMount() {

    }

    render() {
        return <>
        {Template.get('/single-course/content-landing.js', this)}
        </>
    }
}

export default PlayerLanding