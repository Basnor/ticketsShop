import {
    ADD_TO_CART,
    REMOVE_ITEM,
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
export const removeItem = (ticket) => {
    return {
        type: REMOVE_ITEM,
        payload: { ticket }
    }
}

//subtract qt action
export const subtractQuantity = (ticket) => {
    return {
        type: SUB_QUANTITY,
        payload: { ticket }
    }
}

//add qt action
export const addQuantity = (ticket) => {
    return {
        type: ADD_QUANTITY,
        payload: { ticket }
    }
} 
