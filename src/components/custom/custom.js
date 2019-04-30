import React,{Component} from 'react';


class Custom extends Component{
    render(){
        console.log(this.props);
        const listData= this.props.parentData.inputList.map((data)=>(
            <div style={{color:data.color}}>{data.name}</div>
        ));
       
        
        return (
            <ul>{listData}</ul>
        )
    }
}
export default Custom