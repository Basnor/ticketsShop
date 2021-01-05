import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import InputMask from 'react-input-mask';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePhone(phone) {
        if (!phone) return false;

        let regexp = /\d/g;
        if (phone.match(regexp).length === 11) {
            this.props.createMessage({ phoneValidation: '' });
            return true;
        }
        return false;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, password, password2, phone } = this.state;

        if (!this.validatePhone(phone) && phone) {
            this.props.createMessage({ phoneValidation: 'Поле «Телефон» некорректно' });
            return;
        }

        if (!this.validateEmail(email) && email) {
            this.props.createMessage({ emailValidation: 'Поле «Email» некорректно' });
            return;
        }

        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Пароли не совпадают' });
            this.setState({ password2: '' });
            return;
        }

        const newUser = {
            email,
            password,
            first_name, 
            last_name,
            phone
        };
        this.props.register(newUser);
        
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    getMsg() {
        if (this.props.error.msg.first_name) return <span>Поле «Имя» не заполнено</span>;
        if (this.props.error.msg.last_name) return <span>Поле «Фамилия» не заполнено</span>;
        if (this.props.error.msg.phone) return <span>Поле «Телефон» не заполнено</span>;
        if (this.props.message.phoneValidation) return <span>{this.props.message.phoneValidation}</span>;
        if (this.props.error.msg.email) return <span>Поле «Email» не заполнено или почта уже зарегистрирована</span>;
        if (this.props.message.emailValidation) return <span>{this.props.message.emailValidation}</span>;
        if (this.props.error.msg.password) return <span>Поле «Пароль» некорректно</span>;
        if (this.props.message.passwordNotMatch) return <span>{this.props.message.passwordNotMatch}</span>;
        return '';
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        const { first_name, last_name, email, password, password2, phone } = this.state;

        let textfieldFNameClasses = 'textfield__box';
        if (this.props.error.msg.first_name) {
            textfieldFNameClasses += ' textfield__box_error';
        }
        
        let textfieldLNameClasses = 'textfield__box';
        if (this.props.error.msg.last_name) {
            textfieldLNameClasses += ' textfield__box_error';
        }

        let textfieldPhoneClasses = 'textfield__box';
        if (this.props.error.msg.phone) {
            textfieldPhoneClasses += ' textfield__box_error';
        }

        let textfieldEmailClasses = 'textfield__box';
        if (this.props.error.msg.email) {
            textfieldEmailClasses += ' textfield__box_error';
        }

        let textfieldPasswordClasses = 'textfield__box';
        if (this.props.message.passwordNotMatch || this.props.error.msg.password) {
            textfieldPasswordClasses += ' textfield__box_error';
        }

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
            <div className="register">
                <div className="auth-card">
                    <h4>Регистрация аккаунта</h4>
                    <form onSubmit={this.onSubmit} className="auth-form">
                        {this.getMsg() ? errorMsg : ''}
                        <div className={textfieldFNameClasses}>
                            <input
                                type="fname"
                                className="textfield__box__input"
                                name="first_name"
                                placeholder="Имя"
                                onChange={this.onChange}
                                value={first_name}
                            />
                        </div>
                        <div className={textfieldLNameClasses}>
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
                        <div className={textfieldPhoneClasses}>
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
                        <div className={textfieldEmailClasses}>
                            <input
                                type="email"
                                className="textfield__box__input"
                                name="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className={textfieldPasswordClasses}>
                            <input
                                type="password"
                                className="textfield__box__input"
                                name="password"
                                placeholder="Пароль"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className={textfieldPasswordClasses}>
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
    error: state.errors,
    message: state.messages,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
