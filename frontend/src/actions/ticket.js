import axios from 'axios';
import { GET_TICKET } from '../actions/types';
import { GET_TICKET_TYPES } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';


// Get ticket
export const getTicket = (ticketID, url) => dispatch => {
    axios.get(`${url}/api/${ticketID}/`)
        .then(result => {
            dispatch({
                type: GET_TICKET,
                payload: result.data
            });
        }).catch(error => console.log(error));
};


// Get types
export const getTypes = () => dispatch => {
    axios.get('api/type/')
        .then(result => {
            dispatch({
                type: GET_TICKET_TYPES,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
