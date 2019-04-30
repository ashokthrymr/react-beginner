import React, { Component } from 'react';
import './App.css';
// import UserInput from './components/task1/UserInput';
// import UserOutput from './components/task1/UserOuput';
// import List from './components/task1/list'
import Validation from './components/task2/validation';
import CharComponent from './components/task2/CharComponent'
class App extends Component {
  constructor(props) {
    super(props);
    // Task 1
    // this.state={
    //   userName:''
    // }


    // Task 2
    this.state = {
      inputLength: '',
      list: []
    }
  }

  // Task 1
  // eventHandler(event){
  //   this.setState({userName:event.target.value})
  // }

  //Task 2

  changeHandler(event) {
    let value = event.target.value;
    let array = value.split('');
    this.setState({
      inputLength: Number(value.length),
      list: array
    })
  }
  removefromList(event,value) {
    console.log(event, value);
    let arrays = this.state.list;
    let removebleIndex = arrays.findIndex(ele => ele === event);
    arrays.splice(removebleIndex, 1);
    this.setState({
      list:arrays
    })
  }

  render() {
    const style={
      display:"inline-block",
      padding:"16px",
      textAlign:"center",
      margin:"16px",
      border:"1px solid #ccc"
    }
    return (
      <div className="App">
        <input  onChange={this.changeHandler.bind(this)} />
        <p>Length of the value: {this.state.inputLength}</p>
        {/* Task 1 */}
        {/* <UserInput myName={this.eventHandler.bind(this)}></UserInput>
        <UserOutput firstName="balaga" lastName="ashok"></UserOutput>
        <UserOutput firstName="thrymr" lastName="thrymr">I am from Child</UserOutput>
        <UserOutput  firstName={this.state.userName}></UserOutput>
        <List></List> */}

        {/* Task 2 */}
        <Validation lengthVal={this.state.inputLength}></Validation>
        {this.state.list.map((element) => (
          <CharComponent style={style}  name={element}  onClick={this.removefromList.bind(this, element)}></CharComponent>
        ))}
      </div>
    );
  }
}

export default App;
