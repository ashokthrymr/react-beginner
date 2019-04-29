import React,{Component} from 'react'

class CharComponent extends Component{

    render(){
        
        console.log("i am Chart",this.props);
        return (
            <div onClick={this.props.onClick} style={this.props.style}>
                {this.props.name}
            </div>
        )
    }
}

export default CharComponent