import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//import API
import callApi from './api'
export class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading:false,
             _products:[]
        }
    }

    componentDidMount(){
        callApi(`/products`,'GET',null).then((item)=>{
            console.log(item.data)
            this.setState({
                loading:true,
                _products:item.data
            })
        })
    }
    deleteProduct = (id) => {
      //call Restful API method ="DELETE"
      callApi(`/products/${id}`,'DELETE',null).then((item)=>{
            this.setState({
                _products:this.state._products.filter(product=>product.id!=id)
            })
      })
    }
    
    render() {
        const {_products,loading}  =  this.state;
        if(!loading){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div className="container">
            <div className="row">
               <div className="col-md-8">
                   <table className="table">
                      <thead>
                         <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                             
                         </tr>
                      </thead>
                      <tbody>
                         {
                            _products.map((item,index)=>(
                               <tr key = {index}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td><img src={item.image} style={{width:'60px',heightt:'40px'}} /></td>
                                  <td>{item.price}</td>
                                  <td><Link to={`/edit/${item.id}`}><span className="badge badge-warning text-white">modify</span></Link></td>
                                  <td><span className="badge badge-danger" onClick={()=>this.deleteProduct(item.id)}>remove</span></td>
                               </tr>
                            ))
                         }
                      </tbody>
                   </table>
               </div>
            </div>
       </div>
 
        )
    }
}

export default Product
