import React, { Component } from 'react';

class Validation extends Component {


    render() {
        console.log(this.props);
        let text;
        if(this.props.lengthVal){
            if (this.props.lengthVal < 5) {
                text = "Value too short"
            } else if (this.props.lengthVal > 5) {
                text = "Value too Long"
            }
        }
        return (
            <div>{text}</div>
        )
    }
}

export default Validation