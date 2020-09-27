import React, { Component } from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../actions/index';



function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    
    return(
        <div className="boxCartList">
         
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td><i className="fas fa-trash-alt" onClick={()=>DeleteCart(key)}></i></td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                <i className="fas fa-arrow-left" onClick={()=>DecreaseQuantity(key)}></i>
                                <b className="quantity">{item.quantity}</b>
                                <i className="fas fa-arrow-right" onClick={()=>IncreaseQuantity(key)}></i>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)} $</td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>
              
            </table>
        </div>
    )
}
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state._todoProduct
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//        GetAllCart:()=>dispatch(GetAllCart()),
//        IncreaseQuantity:key=>dispatch(IncreaseQuantity(key)),
//        DecreaseQuantity:key=>dispatch(DecreaseQuantity(key))
//    }
// }

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
