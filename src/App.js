import React,{Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from  './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }


  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get(`/api/inventory`).then( res => {
      console.log('getInventory',res.data);
      this.setState({
        inventory: res.data
      })
    })
  }

  postProduct = (product) => {
    console.log('postProduct', product)
    axios.post(`/api/inventory`, product).then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }


  render(){
  return (
    <div className="App">
      <Header />
      <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} />
      <Form getInventory={this.getInventory} postProduct={this.postProduct}/> 
    </div>
  );
 }
}


