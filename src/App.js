import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form';
// import UserInput from './components/task1/UserInput';
// import UserOutput from './components/task1/UserOuput';
// import List from './components/task1/list'
// import Validation from './components/task2/validation';
// import CharComponent from './components/task2/CharComponent'
// import Custom from './components/custom/custom';
import Crud from './components/CRUD/Crud';
import Getservice from './components/servicce/getservice'
class App extends Component {
  constructor(props) {
    super(props);
    // Task 1
    // this.state={
    //   userName:''
    // }


    // Task 2
    // this.state = {
    //   inputLength: '',
    //   list: []
    // }


    // custom
    // this.state = {
    //   inputList: [],
    //   inputValue: '',
    //   disabled: true
    // }


    // Form 
    // this.state = {
    //   formData: '',
    // }


    //CRUD operations
    // this.state = {
    //   list: []
    // }
  }

  // Task 1
  // eventHandler(event){
  //   this.setState({userName:event.target.value})
  // }

  //Task 2
  // changeHandler(event) {
  //   let value = event.target.value;
  //   let array = value.split('');
  //   this.setState({
  //     inputLength: Number(value.length),
  //     list: array
  //   })
  // }
  // Task 2
  // removefromList(event,value) {
  //   console.log(event, value);
  //   let arrays = this.state.list;
  //   let removebleIndex = arrays.findIndex(ele => ele === event);
  //   arrays.splice(removebleIndex, 1);
  //   this.setState({
  //     list:arrays
  //   })
  // }



  // custom task
  // customChange(event) {
  //   let value = event.target.value;
  //   console.log(value.length);

  //   if (value) {
  //     if (/^[0-9a-zA-Z]+$/i.test(value)) {
  //       this.setState({
  //         disabled: false,
  //         inputValue: value
  //       })
  //     } else {
  //       this.setState({
  //         disabled: true,
  //         inputValue:value
  //       })
  //     }
  //   }
  //   else {
  //     this.setState({
  //       disabled: true,
  //       inputValue: value
  //     })
  //   }
  // }
  // getRandomColor() {
  //   let color = "#";
  //   let letters="0123456789abcdef"
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color
  // }
  // addevent() {
  //   let inputValue = this.state.inputValue;
  //   if (inputValue) {
  //     let listData = this.state.inputList;
  //     let obj={
  //       "name":inputValue,
  //       "color":this.getRandomColor()
  //     }
  //     let findElementExit = listData.findIndex(ele => ele.name === inputValue);
  //     listData = [...listData, obj];
  //     if (findElementExit === -1) {
  //       this.setState({
  //         inputList: listData,
  //         inputValue: ''
  //       })
  //     } else {
  //       alert("This element Already exit");
  //     }
  //   }
  // }

  // Form
  // formSubmit(event) {
  // let eventData={...event}
  //   this.setState({
  //     formData:eventData
  //   })
  //   console.log(this.state);
  // }

  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid #ccc"
    }
    return (
      <div className="App">

        {/* Task 1 */}
        {/* <UserInput myName={this.eventHandler.bind(this)}></UserInput>
        <UserOutput firstName="balaga" lastName="ashok"></UserOutput>
        <UserOutput firstName="thrymr" lastName="thrymr">I am from Child</UserOutput>
        <UserOutput  firstName={this.state.userName}></UserOutput>
        <List></List> */}

        {/* Task 2 */}
        {/* <input  onChange={this.changeHandler.bind(this)} />
        <p>Length of the value: {this.state.inputLength}</p>
        <Validation lengthVal={this.state.inputLength}></Validation>
        {this.state.list.map((element) => (
          <CharComponent style={style}  name={element}  onClick={this.removefromList.bind(this, element)}></CharComponent>
        ))} */}


        {/* {custom task} */}

        {/* <input type="text" onChange={this.customChange.bind(this)} value={this.state.inputValue} /><button disabled={this.state.disabled} onClick={this.addevent.bind(this)}>Add</button>
        <Custom parentData={this.state} /> */}



        {/* Form data */}
        {/* <h4>Forms</h4>
        <Form submit={this.formSubmit.bind(this)}></Form>
        <p>{JSON.stringify(this.state.formData)}</p> */}

        {/*  curd operations 
        <h3> CRUD Operation</h3>
        <Crud></Crud> */}


        <h4>Service</h4>
        <Getservice></Getservice>
      </div>
    );
  }
}

export default App;
