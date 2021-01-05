import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    getMsg() {
        if (this.props.error.msg.username) return <span>Поле «Email» не заполнено</span>;
        if (this.props.message.emailValidation) return <span>{this.props.message.emailValidation}</span>;
        if (this.props.error.msg.password) return <span>Поле «Пароль» не заполнено</span>;
        if (this.props.error.msg.non_field_errors) return <span>Данные некорректны</span>;
        return '';
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        const { email, password } = this.state;

        const errorMsg = (
            <div className="error-msg">
                <ErrorOutlineIcon 
                    style={{ fontSize: 20, 
                            color: '#F5222D', 
                            paddingTop: '0.2rem', 
                            paddingRight: '0.4rem' }}>
                </ErrorOutlineIcon>
                {this.getMsg()}
            </div>
        );

        return (
            <div className="login">
                <div className="auth-card">
                    <h4>Войти</h4>
                    <form onSubmit={this.onSubmit} className="auth-form">
                        {this.getMsg() ? errorMsg : ''}
                        <div className="textfield__box">
                            <input
                                type="email"
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
    error: state.errors,
    message: state.messages,
});

export default connect(mapStateToProps, { login })(Login);
