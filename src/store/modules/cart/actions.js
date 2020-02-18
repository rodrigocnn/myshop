 export function addToCart(product){
    return {
        type:'ADD_TO_CART',
        product
    }
 }

 export function removeFromCart(id){
    return {
        type:'REMOVE_FROM_CART',
        id: id
    }
 }

 export function updateAmount(product, amount){

    return {
        type:'UPDATE_AMOUNT',
        product,
        amount
    }
 }

 export function getAmountCart(id){
    return {
        type:'GET_AMOUNT_PRODUCT',
        id
    }
 }