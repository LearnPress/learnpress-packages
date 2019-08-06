import {Component} from '@wordpress/element';
import {prettyJSON} from '../utils';

class PrettyJSON extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: prettyJSON(this.props.json, this.props.pre === undefined ? true : this.props.pre)}}/>
        )
    }
}

export default PrettyJSON;