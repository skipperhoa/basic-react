import React, { Component } from 'react';
import { connect } from "react-redux";
import {actFetchProductsRequest, AddCart } from '../actions/index'
/* Martial-ul*/
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
       
    } 
   
    render() {
        const { _products } = this.props._products
        if( _products.length>0){
         console.warn(this.props.carts)
            return (
                <div className="boxProducts">
                    <ul>
                        {
                            _products.map((item,key)=>(
                                <li key={key} >
                                    <img src={item.image} />
                                    <span>{item.name}</span>
                                    <strong>{item.price}$</strong>
                                    <button onClick={()=>this.props.AddCart(item)}>Add Cart</button>
                                </li>
                            ))
                        }
                        
                        
                    </ul>
                </div>
            )
        }
        return (
            <div className="No">
                <h3>Chua co san pham nao</h3>
            </div>
        )
    }
}
const mapStateToProps = state => {
   
    return { _products: state._todoProduct,
            carts:state._todoProduct.Carts };
  };
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
