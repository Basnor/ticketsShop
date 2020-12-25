import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../routes';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

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
                    <Router>
                        <BaseRouter />
                    </Router>
                    <Footer />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
