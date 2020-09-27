import React, { Component } from 'react'
import callApi from './api';

export class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
             name:"",
             price:"",
             image:""
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        //Restful API method = "GET", 
        callApi(`/products/${id}`,'GET',null).then((item)=>{
            console.log(item.data)
            this.setState({
                id:item.data.id,
                name:item.data.name,
                price:item.data.price,
                image:item.data.image
            })
        })
    }
    editProduct = () => {
        //call Restful API method="PUT"
        let body ={
                name:this.state.name,
                price:this.state.price,
                image:this.state.image
        }
        callApi(`/products/${this.state.id}`,'PUT',body).then((item)=>{
            console.log(item)
        })
    }
    
    
    render() {
        return (
            <div className="container">       
            <div className="row">
                <div className="col-md-8">
                    <h1>Edit Product</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" value={this.state.price}
                        onChange={(e)=>this.setState({price:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="text" className="form-control" value={this.state.image}
                        onChange={(e)=>this.setState({image:e.target.value})}/>
                    </div>
                    <div className="form-group">
                       <button className="btn btn-primary" onClick={this.editProduct}>Update</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Edit
