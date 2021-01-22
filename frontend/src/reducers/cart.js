import {
    ADD_TO_CART,
    REMOVE_ITEM,
    REMOVE_CARTS,
    SUB_QUANTITY,
    ADD_QUANTITY
} from '../actions/types';

const initialState = {
    addedItems: []
};

export default function (state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = {
                orderId: null,
                ticketId: action.payload.ticket.id,
                num: 1
            }

            let isTicket = false;
            for (let n in newState) {
                if (!newState[n]) continue;

                if (newState[n].ticketId === action.payload.ticket.id) {
                    newState[n].num++;
                    isTicket = true;
                    break;
                }
            }

            if (isTicket) break;

            newState[
                Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
            ] = addedItem;
        
            break;
        case REMOVE_ITEM:
            for (let n in newState) {
                if (!newState[n]) continue;

                if (n == action.payload.id) {
                    delete newState[n];
                }
            }
            
            break;
        case ADD_QUANTITY:
            for (let n in newState) {
                if (!newState[n]) continue;

                if (n == action.payload.id) {
                    newState[n].num++;
                    break;
                }
            }

            break;
        case SUB_QUANTITY:
            for (let n in newState) {
                if (!newState[n]) continue;

                if (n == action.payload.id) {
                    if (newState[n].num == 1) {
                        delete newState[n];
                    } else {
                        newState[n].num--;
                    }
                    break;
                }
            }

            break;
        case REMOVE_CARTS:
            for (let n in newState) {
                if (!newState[n]) continue;

                delete newState[n];
            }

            break;
        default:
            break;
        }

    return newState;
};
  