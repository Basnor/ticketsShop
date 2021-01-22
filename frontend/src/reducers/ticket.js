import { GET_TICKET } from '../actions/types';
import { GET_TICKETS } from '../actions/types';
import { GET_TICKET_TYPES } from '../actions/types';

const initialState = {
    ticket: {},
    tickets: [],
    ticketTypes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKET:
            return {
                ...state,
                ticket: action.payload
            };
        case GET_TICKETS:
            return {
                ...state,
                tickets: action.payload
            };
        case GET_TICKET_TYPES:
            return {
                ...state,
                ticketTypes: action.payload
            };
        default:
            return state;
    }
};
