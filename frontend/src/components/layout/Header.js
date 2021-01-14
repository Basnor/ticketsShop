import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import "./header.scss";
import "../common/button.scss";
import logo from "../../assets/img/logo.svg"; 

export class Header extends Component {
    state = {
        anchorEl: null,
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    getLinks(authContent) {
        let output;
        let eventActive;
        let ticketsActive;
        let basketActive;

        if (location.pathname === '/event/') {
            eventActive = 'active';
        }

        if (location.pathname === '/tickets/') {
            ticketsActive = 'active';
        }

        if (location.pathname === '/basket/') {
            basketActive = 'active';
        }

        output = (
            <nav>
                <ul className='nav__links'>
                    <li><a href="/event/" className={eventActive}>О мероприятии</a></li>
                    <li><a href="/tickets/" className={ticketsActive}>Билеты</a></li>
                    <li><a href="/basket/" className={basketActive}>Корзина</a></li>
                    {authContent ? <li>{authContent}</li> : ''}
                </ul>
            </nav>
        );

        return output;
    }

    render() {
        const { isLoading, isAuthenticated, user } = this.props.auth;
        const { anchorEl } = this.state;

        const StyledMenuItem = withStyles((theme) => ({
            root: {
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '1.4rem',
                padding: '0 30px',
                textTransform: 'uppercase',
            }
        }))(MenuItem);

        const StyledMenu = withStyles({
            paper: {
                color: 'rgba(31,32,65, 0.75)',
            }
        })((props) => (
            <Menu
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                {...props}
            />
        ));

        let navLinks;
        if (isLoading) {
            navLinks = <div></div>;
        } else {
            navLinks = this.getLinks(isAuthenticated ? authLinks : guestLinks);
        }

        const authLinks = (
            <div>
                <Button 
                    aria-controls="menu" 
                    aria-haspopup="true" 
                    onClick={this.handleClick}>
                        {user ? `${user.first_name} ${user.last_name}` : ''}
                </Button>
                <StyledMenu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <StyledMenuItem component="a" href="/event/">Профиль</StyledMenuItem>
                    <StyledMenuItem onClick={this.props.logout}>Выйти</StyledMenuItem>
                </StyledMenu>
            </div>
        );
      
        const guestLinks = (
            <a href="/login/" className='btn btn_white'>Войти</a>
        );

        return (
            <div className='header'>
                <a href ="/about/">
                    <img className='header__img' src={logo} alt="Logo" />
                    <span className='header__label'>Events</span>
                </a>

                {isLoading ? this.getLinks() : this.getLinks(isAuthenticated ? authLinks : guestLinks)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
