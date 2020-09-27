import React, { Component } from 'react'
import {connect} from 'react-redux';
export class Header extends Component {
    constructor(props) {
        super(props)
    
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const {count}  = this.props.count;
        if(count>0){
            return (
                <div>
                    <h1>Count : {count}</h1>
                </div>
            )
        }
        return (
            <div>
                <h1>Count : 0</h1>
            </div>
        )
    }
}
const matStateToProps = state =>{
    return{
        count:state.dataApp
    }
}
export default connect(matStateToProps,null)(Header)
