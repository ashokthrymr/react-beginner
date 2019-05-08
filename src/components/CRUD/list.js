import React from 'react';

const ChildList = (props) => {
    const deleteMethod = (index, event) => {
        props.delete(index)
    }
    const editMethod = (index, event) => {
        props.edit(index)
    }
    const loopelements = props.data.map((ele, index) => (
        <tr key={index}>
            <td style={props.style}>{ele.Id}</td>
            <td style={props.style}>{ele.name}</td>
            <td style={props.style}>{ele.email}</td>
            <td style={props.style}>{ele.dig}</td>
            <td><button onClick={(e) => { deleteMethod(index, e) }}>Delete</button></td>
            <td><button onClick={(e) => { editMethod(index,e)}}>Edit</button></td>
        </tr>
    ))

    return (
        <React.Fragment>
            {loopelements}
        </React.Fragment>
    )
}

export default ChildList
