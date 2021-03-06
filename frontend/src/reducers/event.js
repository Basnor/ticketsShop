import { GET_EVENT } from '../actions/types';

const initialState = {
    event: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
};