import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducers/index'
import './config'
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authRoute/authRoute'
import ServiceInfo from './container/service_info/service_info'
import ClientInfo from './container/client_info/client_info'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
))

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/serviceinfo' component={ServiceInfo}></Route>
                        <Route path='/clientinfo' component={ClientInfo}></Route>
                        <Route path='/chat/:userName' component={Chat}></Route>
                        <Route component={Dashboard}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ),    
    document.getElementById('root')
);

