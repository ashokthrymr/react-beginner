import React, { Component } from 'react';
import ChildList from '../CRUD/list';
class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            Id: '',
            email: '',
            name: '',
            designation: 'UI',
            updatebleIndex: ''
        }
        // this.changeEventHandler=this.changeEventHandler.bind(this)
    }

    submitData() {
        let obj = {
            name: this.state.name,
            email: this.state.email,
            Id: this.state.Id,
            dig: this.state.designation
        }
        let list = this.state.array;
        if (this.state.updatebleIndex) {
            list[this.state.updatebleIndex - 1] = obj;
        } else {
            list = [...list, obj];
        }
        this.setState({
            array: list
        })
        this.setState({
            Id: '',
            email: '',
            name: '',
            designation: 'UI',
            updatebleIndex: ''
        })

    }
    changeEventHandler(type, event) {
        if (type === "NAME") {
            this.setState({
                name: event.target.value
            })
        } else if (type === "ID") {
            this.setState({
                Id: event.target.value
            })
        } else if (type === "EMAIL") {
            this.setState({
                email: event.target.value
            })
        } else if (type === "DIG") {
            this.setState({
                designation: event.target.value
            })
        }
    }

    delete(index) {
        console.log("before", this.state.array.length);
        this.state.array.splice(index, 1);
        console.log("after", this.state.array.length);
        this.setState({
            array: this.state.array
        })
        //   this.state.list = [...this.list];
    }

    editMethod(index) {
        console.log('index');
        let obj = this.state.array[index];
        this.setState({
            Id: obj.Id,
            email: obj.email,
            name: obj.name,
            designation: obj.dig,
            updatebleIndex: index+1
        })
    }

    render() {
        const style = {
            border: "1px solid #ccc",
            //width:"100%"
        }
        return (
            <div>
                <input placeholder="Id" value={this.state.Id} onChange={this.changeEventHandler.bind(this, "ID")}></input><br></br><br></br>
                <input placeholder="Name" value={this.state.name} onChange={this.changeEventHandler.bind(this, "NAME")}></input><br></br><br></br>
                <input placeholder="Email" value={this.state.email} onChange={this.changeEventHandler.bind(this, "EMAIL")}></input><br></br><br></br>
                <select placeholder="Designation" value={this.state.designation} onChange={this.changeEventHandler.bind(this, "DIG")}>
                    <option value="UI">UI Developer</option>
                    <option value="JAVA">JAVA Developer</option>
                    <option value="FULL">Full stack Developer</option>
                </select><br></br><br></br>
                <button type="button" onClick={this.submitData.bind(this)}>Submit</button>
                <br></br><br></br>
                <table style={style}>
                    <thead>
                        <tr>
                            <th style={style}>ID</th>
                            <th style={style}>Name</th>
                            <th style={style}>Email</th>
                            <th style={style}>Designation</th>
                            <th style={style}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ChildList data={this.state.array} style={style} delete={this.delete.bind(this)} edit={this.editMethod.bind(this)}></ChildList>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Crud