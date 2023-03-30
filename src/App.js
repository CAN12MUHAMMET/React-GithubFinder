import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Userlist from './components/Userlist';


import React, { Component } from 'react'
import Search from './components/Search';
import Alert from './components/Alert';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
       users : [],
       error : null
    }
  }
   
  searchUsers=(keyword)=>{
    this.setState({loading:true});
    setTimeout(()=>{
      fetch("https://api.github.com/search/users?q=" + keyword)
      .then(response =>response.json())
      .then(data =>this.setState({users : data.items, loading: false}) );
    },1000)
  }

  clearResults = () =>{
    this.setState({users : []});
    
  }
  displayAlert = (msg,type)=>{
    this.setState({
      error:{
        msg : msg , type : type
      }
    });
    setTimeout(()=>{
      this.setState({
        error : null 
      });
    },2550)
  }
   
  render() {
    return (
<div >
      <Navbar/>
      <Search searchUsers={this.searchUsers} clearResults={this.clearResults} showClearButtons={this.state.users.length > 0 ? true:false} displayAlert={this.displayAlert} />
       <Alert error={this.state.error} />  
     <div className="container mt-3">
     <Userlist users={this.state.users} loading={this.state.loading}/>
     </div>
    </div>
    )
  }
}

export default App

