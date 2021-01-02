import { combineReducers } from 'redux';
import event from './event';
import messages from './messages';
import auth from './auth';
import errors from './errors';


export default combineReducers({
    event,
    messages,
    auth,
    errors
});
