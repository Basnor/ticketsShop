import { combineReducers } from 'redux';
import event from './event';
import ticket from './ticket';
import messages from './messages';
import auth from './auth';
import errors from './errors';


export default combineReducers({
    event,
    ticket,
    messages,
    auth,
    errors
});
