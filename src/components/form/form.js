import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }
    nameChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    emailChange(event) {
        this.setState({
            email: event.target.value
        })
    }
    submitData() {
        this.props.submit(this.state)

    }
    render() {
        console.log(this.props);

        return (
            <div>
                <input type='text' value={this.state.name} onChange={this.nameChange.bind(this)} /><br></br><br></br>
                <input type='text' value={this.state.email} onChange={this.emailChange.bind(this)} /><br></br><br></br>
                <button type="button" onClick={this.submitData.bind(this)}>Submit</button>
            </div>
        )
    }
}
export default Form