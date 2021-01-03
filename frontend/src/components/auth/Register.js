import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import InputMask from 'react-input-mask';

import "../common/button.scss"
import "../common/textfield.scss"
import "./auth-card.scss"

export class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        phone: '',
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, password, password2, phone } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
            const newUser = {
                email,
                password,
                first_name, 
                last_name,
                phone
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

render() {
    if (this.props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    const { first_name, last_name, email, password, password2, phone } = this.state;
    return (
        <div className="register">
            <div className="auth-card">
                <h4>Регистрация аккаунта</h4>
                <form onSubmit={this.onSubmit} className="auth-form">
                    <div className="textfield__box">
                        <input
                            type="fname"
                            className="textfield__box__input"
                            name="first_name"
                            placeholder="Имя"
                            onChange={this.onChange}
                            value={first_name}
                        />
                    </div>
                    <div className="textfield__box">
                        <input
                            type="lname"
                            className="textfield__box__input"
                            name="last_name"
                            placeholder="Фамилия"
                            onChange={this.onChange}
                            value={last_name}
                        />
                    </div>
                    <div className="textfield__title">Номер телефона</div>
                    <div className="textfield__box">
                        <InputMask
                            className="textfield__box__input"
                            name="phone"
                            placeholder="+7 (XXX) XXX XX-XX"
                            mask="+7 (999) 999 99-99"
                            maskChar=" "
                            onChange={this.onChange}
                            value={phone}
                        />
                    </div>
                    <div className="textfield__title">Данные для входа</div>
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
                    <div className="textfield__box">
                        <input
                            type="password"
                            className="textfield__box__input"
                            name="password2"
                            placeholder="Подтверждение пароля"
                            onChange={this.onChange}
                            value={password2}
                        />
                    </div>
                    <div className="btn_auth">
                        <Link to="/login" className="btn btn_white">Войти</Link>
                        <button type="submit" className="btn btn_purple btn_right">
                            Перейти к корзине
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

export default connect(mapStateToProps, { register, createMessage })(Register);
