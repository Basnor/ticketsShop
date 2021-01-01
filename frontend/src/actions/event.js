import axios from 'axios';
import { GET_EVENT } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';


// Get event
export const getEvent = () => dispatch => {
    axios.get('api/')
        .then(result => {
            dispatch({
                type: GET_EVENT,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
