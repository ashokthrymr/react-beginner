import React ,{Component} from 'react';


class List extends Component{
    render(){
        const array = ["thrymr","balaga","UI","Developer"];
        const listItems =array.map(element=>
                <li>{element}</li>
            )
        return(
            <ul>{listItems}</ul>
        )
    }
}

export default List