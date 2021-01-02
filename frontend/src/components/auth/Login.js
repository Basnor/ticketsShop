import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

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
      <div className="">
        <div className="">
          <h2 className="">Войти</h2>
          <form onSubmit={this.onSubmit}>
            <div className="">
              <input
                type="text"
                className=""
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                value={email}
              />
            </div>

            <div className="">
              <input
                type="password"
                className=""
                name="password"
                placeholder="Пароль"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="">
              <button type="submit" className="">
                Войти
              </button>
            </div>
            <p>
              <Link to="/register" className="">Создать аккаунт</Link>
            </p>
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
