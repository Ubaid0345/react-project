// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Register from './Component/Register.js';
import Greet from './Component/Greet.js';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegistered:false,
       name:null,
       email:null,
       password:null,
       showPass:false,
    };
  }
  
  registrationHandler =(event) =>{
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({name, email, password, isRegistered:true})
    event.preventDefault()
  }

  showPasswordHandler = ()=>{
    console.log(this.state);
    this.setState({showPass : !this.state.showPass}, ()=> {
    console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        {this.state.isRegistered ? (<Greet name={this.state.name} email={this.state.email}></Greet>) : (<Register submit={this.registrationHandler} showPass={this.state.showPass} click={this.showPasswordHandler}></Register>)}
      </div>
    )
  }
}

export default App;
