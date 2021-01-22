import {
    ADD_TO_CART,
    REMOVE_ITEM,
    REMOVE_CARTS,
    SUB_QUANTITY,
    ADD_QUANTITY
} from './types';

//add cart action
export const addToCart = (ticket) => {
    if (!ticket) return;

    return {
        type: ADD_TO_CART,
        payload: { ticket }
    }
}

//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: { id }
    }
}

//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        payload: { id }
    }
}

//remove all carts
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: { id }
    }
} 

//add qt action
export const removeCarts = () => {
    return {
        type: REMOVE_CARTS
    }
} 
