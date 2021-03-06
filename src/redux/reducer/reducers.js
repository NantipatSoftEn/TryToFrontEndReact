import { combineReducers } from 'redux';
import { reducer } from 'react-redux-sweetalert';
import { reducer as notificationsReducer } from 'reapop';
import { routerReducer } from 'react-router-redux';

import {
    Lang,
    Notification,
    Todos,
    visibilityFilter
} from '../actions';

export const reducers = {
    Lang,
    Notification,
    Todos,
    visibilityFilter
}

export default combineReducers({
    ...reducers,
    routing: routerReducer,
    notifications: notificationsReducer(),
    sweetalert: reducer,
})