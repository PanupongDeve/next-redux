import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increaseNumber,
    decreaseNumber
} from '../redux/actions'


class Number extends React.Component {
    static getInitialProps({query}) {
        return {query}
      }
    constructor(props) {
        super(props);
    }

    render() {
        const { query } = this.props; 
        return (
            <div style={{ 
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>{ this.props.number}</h1>
                <div style={{ flexDirection: 'row', textAlign: 'center'}}>
                    <button onClick={this.props.increaseNumber}>+</button>
                    <button onClick={this.props.decreaseNumber} style={{ marginLeft: '15px'}}>-</button>
                </div>
                <h1 style={{
                    textAlign: 'center'
                }}>Hello: {query.name ? query.name: 'Anonymouse'}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const mapActionsToProps =  {
    increaseNumber,
    decreaseNumber
}

export default connect(mapStateToProps, mapActionsToProps)(Number);