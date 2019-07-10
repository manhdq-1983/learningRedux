import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import UserApp from './containers/userApp'
import {createStore} from "redux";
import reducer from "./reducers/reducer";

const initialState = {};

const store = createStore(reducer, initialState);

const appRoot = (
    <Provider store={store}>
        <div>
            <UserApp />
        </div>
    </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));
