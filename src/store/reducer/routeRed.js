import authReducer from './authReducer';
import projectRed from './projectRed';
import {combineReducers } from 'redux';
const routeRed = combineReducers({
    auth: authReducer, project: projectRed
});export default routeRed;