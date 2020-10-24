import React, { Component } from 'react'

import "./header.scss"

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <span className='header__label'> Events</span>
                <nav>
                    <ul className='nav__links'>
                        <li><a href="#">О мероприятии</a></li>
                        <li><a href="#">Билеты</a></li>
                        <li><a href="#">О сервисе</a></li>
                        <li><a href="#">Корзина</a></li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default Header
