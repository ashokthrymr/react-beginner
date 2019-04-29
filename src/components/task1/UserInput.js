import React ,{Component} from 'react';


class UserInput extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <input type="text"   onChange={this.props.myName}/>
        )
    }
}
export default UserInput