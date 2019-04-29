import React,{Component} from 'react';

class UserOutput extends Component{
    render(){
        const divStyle = {
           border:'1px solid #ccc',
           width:"60%",
           textAlign:'center',
            margin:"10px auto",
            boxShadow:'0px 1px 1px 1px #ccc',
            padding:'10px',
            
          };
        return (
            <div style={divStyle}>
                <p>first Name is :{this.props.firstName}  ,Last Name: {this.props.lastName}</p>
                {this.props.children}
            </div>
        )
    }
}
export default UserOutput