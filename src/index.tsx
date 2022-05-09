import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./app/store";
import { AuthProvider } from './context/AuthProvider';


ReactDOM.render(
    <AuthProvider>
    <Provider store={store}>
        <App />
    </Provider>,
    </AuthProvider>,
    document.getElementById("root"));
