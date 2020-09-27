import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../actions/index';
let _dataLocal = null;
let _numberCartLocal = 0;
if(localStorage.getItem('Carts')!=null){
    _dataLocal = JSON.parse(localStorage.getItem('Carts'));
    _dataLocal.map(item=>{
        _numberCartLocal+=item.quantity;
    });
}
const initProduct = {
    numberCart:_numberCartLocal,
    Carts:_dataLocal===null?[]:_dataLocal,
    _products:[]
}
console.log("cp",localStorage.getItem('Carts'))
function todoProduct(state=initProduct,action){
   // console.warn(action.payload)
    switch(action.type){
        case GET_ALL_PRODUCT:
            return{
                ...state,
                _products:action.payload
            }
        case GET_NUMBER_CART:
            return{
                ...state
            }
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    image:action.payload.image,
                    price:action.payload.price
                } 
                state.Carts.push(cart); 
                /*SET SAVE CART*/
                if(localStorage.getItem('Carts')===null){
                    var _localStorageCarts = [];
                    _localStorageCarts.push(cart)
                    localStorage.setItem('Carts',JSON.stringify(_localStorageCarts))
                }
            }
            else{
                
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
                updateLocalCart(state.Carts)
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;
            updateLocalCart(state.Carts)
           return{
               ...state
           }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            updateLocalCart(state.Carts)
            return{
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
          //  updateLocalCart(state.Carts)
          deleteCart(action.payload)
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id!=state.Carts[action.payload].id
                })
               
            }
        default:
            return state;
    }
}
function updateLocalCart(_data){
   // localStorage.removeItem('Carts');
    localStorage.setItem('Carts',JSON.stringify(_data))
}
function deleteCart(payload){
    let _data = JSON.parse(localStorage.getItem('Carts'));
    console.log(_data[payload].id)
    let _temp = _data.filter(item=>{
        return item.id!=_data[payload].id
    })
    updateLocalCart(_temp)

}
const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;
