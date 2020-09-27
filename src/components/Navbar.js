import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {GetNumberCart} from '../actions/index';

class Navbar extends Component {
    render() {
        return (
            <div className="menu-top">
                <ul className="navbar">
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/products">Products</Link></li>
                    <li><Link to ="/carts">Cart <span>{this.props.numberCart}</span></Link></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,{GetNumberCart})(Navbar)
