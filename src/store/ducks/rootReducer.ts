import { combineReducers } from 'redux';

import access from './access';
import steps from './steps'

export default combineReducers({
    access,
    steps,
})