import React, { Component } from 'react'

import "./header.scss"
import "../block/btn.scss"
import logo from "../../assets/img/logo.svg"; 

export class Header extends Component {

    getLinks() {
        let output;
        let eventActive;
        let ticketsActive;
        let aboutActive;
        let basketActive;

        if (location.pathname === '/event/') {
            eventActive = 'active';
        }

        if (location.pathname === '/tickets/') {
            ticketsActive = 'active';
        }

        if (location.pathname === '/about/') {
            aboutActive = 'active';
        }

        if (location.pathname === '/basket/') {
            basketActive = 'active';
        }

        output = (
            <ul className='nav__links'>
                <li><a href="/event/" className={eventActive}>О мероприятии</a></li>
                <li><a href="/tickets/" className={ticketsActive}>Билеты</a></li>
                <li><a href="/about/" className={aboutActive}>О сервисе</a></li>
                <li><a href="/basket/" className={basketActive}>Корзина</a></li>
                <li><a href="/" className='btn btn_white'>Войти</a></li>
            </ul>
        );

        return output;
    }

    render() {
        return (
            <div className='header'>
                <a href ="#">
                    <img className='header__img' src={logo} alt="Logo" />
                    <span className='header__label'>Events</span>
                </a>
                <nav>
                    {this.getLinks()}
                </nav>
                
            </div>
        )
    }
}

export default Header
