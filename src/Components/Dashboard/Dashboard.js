import React,{Component} from 'react';
import axios from 'axios';
import Product from "../Product/Product";




export default class Dashboard extends Component{
    constructor(props){
        super(props);
    }

deleteProduct = (id) => {
    console.log('deleteProduct',id);
    axios.delete(`/api/inventory/${id}`).then(res => {
        this.setState({
            inventory: res.data
        })
    })
}




render(){    
  let mappedInventory = this.props.inventory.map(product => {
    return <Product product={product} deleteProduct={this.deleteProduct} />
  });

  return (
    <div>
      <div>Dashboard</div>
      <section>{mappedInventory}</section>
    </div>
  );
}
}
