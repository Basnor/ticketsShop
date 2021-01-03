import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import "../common/button.scss"
import "../common/textfield.scss"
import "./auth-card.scss"

export class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { email, password } = this.state;
        return (
            <div className="login">
                <div className="auth-card">
                    <h4>Войти</h4>
                    <form onSubmit={this.onSubmit} className="auth-form">
                        <div className="textfield__box">
                            <input
                                type="text"
                                className="textfield__box__input"
                                name="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="textfield__box">
                            <input
                                type="password"
                                className="textfield__box__input"
                                name="password"
                                placeholder="Пароль"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="btn_auth">
                            <Link to="/register" className="btn btn_white">Создать аккаунт</Link>
                            <button type="submit" className="btn btn_purple btn_right">
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
