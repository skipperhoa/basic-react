import React, { Component } from 'react'
import callApi from './api'

export class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             price:"",
             image:""
        }
    }

    postProduct = () => {
        let product = {
            name:this.state.name,
            price:this.state.price,
            image:this.state.image
        }

        //we can call Restful API
        callApi(`/products`,'POST',product).then((item)=>{
            console.log(item)
        });
    }
    
    
    render() {
        return (
            <div className="container">       
            <div className="row">
                <div className="col-md-8">
                    <h1>Post Product</h1>
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
                       <button className="btn btn-primary" onClick={this.postProduct}>Update</button>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Post
