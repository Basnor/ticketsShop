import { GET_TICKET } from '../actions/types';

const initialState = {
    ticket: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKET:
            return {
                ...state,
                ticket: action.payload
            };
        default:
            return state;
    }
};
