import React from 'react';


class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    handleIncreaseNumber = () => {
        let { number } = this.state;
        number = number + 1;
        this.setState({ number });
    }

    handleDecreaseNumber = () => {
        let { number } = this.state;
        number = number - 1;
        this.setState({ number });
    }

    render() {
        return (
            <React.Fragment style={{ 
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>{ this.state.number}</h1>
                <div style={{ flexDirection: 'row', textAlign: 'center'}}>
                    <button onClick={this.handleIncreaseNumber}>+</button>
                    <button onClick={this.handleDecreaseNumber} style={{ marginLeft: '15px'}}>-</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Number;