import authReducer from './authReducer';
import projectRed from './projectRed';
import {combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
const routeRed = combineReducers({
    auth: authReducer, project: projectRed, firestore: firestoreReducer, firebase: firebaseReducer
});export default routeRed;