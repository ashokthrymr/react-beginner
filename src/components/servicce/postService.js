import React, { Component } from 'react';

class PostService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: {}
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    responseData: json
                })
            })
    }
    render() {
        return (
            <React.Fragment>
                <div>Post Service response</div>
                <p>{JSON.stringify(this.state.responseData)}</p>
            </React.Fragment>
        )
    }
}
export default PostService