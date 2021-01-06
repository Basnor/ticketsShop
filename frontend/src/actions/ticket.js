import axios from 'axios';
import { GET_TICKET } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';


// Get ticket
export const getTicket = () => dispatch => {
    axios.get('api/')
        .then(result => {
            dispatch({
                type: GET_TICKET,
                payload: result.data
            });
        }).catch(error => console.log(error));
};