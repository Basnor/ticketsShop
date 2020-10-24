import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Event from './Event';

import { Provider } from 'react-redux';
import store from '../store';

import "../assets/styles/main.scss"
import "../assets/styles/fonts.scss"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <Header />
                    <h1>Hello world!!!!</h1>
                    <Event />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
