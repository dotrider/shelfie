import React,{Component} from 'react'



export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgURL: ''
        }
    }

    handleChange = (e) => {
        console.log('input_boxes',e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

   
    handlePost = () => {
        console.log('handlePost', this.handlePost);
        const{name, price, imgURL} = this.state;
        let newProduct = {
            name,
            price,
            imgURL,
        }
        this.props.postProduct(newProduct)
        //returns empty input
        this.setState({
            name: '',
            price: 0,
            imgURL: ''
        })
    }

    handleCancel = () => {
        console.log(this.handleCancel)
        this.setState({
            name: '',
            price: 0,
            imgURL: ''
        })
    }

    render(){
        const {name, price, imgURL} = this.state
        return(
            <div>
                Form
                <section>
                    <h3>Image URL:</h3>
                    <input value={imgURL} placeholder='imgURL' name='imgURL'onChange={this.handleChange}/>
                    <h3>Product Name:</h3>
                    <input value={name} placeholder='name' name='name' onChange={this.handleChange}/>
                    <h3>Price:</h3>
                    <input value={price} placeholder='price' name='price' onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handlePost}>Add</button>
                </section>

            </div>
        )
    }
}