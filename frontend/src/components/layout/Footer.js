import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./footer.scss"
import logo from "../../assets/img/logo.svg"; 

export class Footer extends Component {
    render() {
        const instagram = 'https://www.instagram.com/';
        const twitter = 'https://twitter.com/explore';
        const facebook = 'https://www.facebook.com/';

        return (
            <div className='footer'>
                <div className='footer_info'>
                    <img className='footer__img' src={logo} alt="Logo" />
                    <span className='footer__label'>Events</span>
                    <p className='footer__about'>Сервис для организаторов мероприятий. Создание событий, расписаний, билетов, хранение постоянной аудитории.</p>
                </div>
                <div className='footer__bottom'>
                    <span>Copyright © 2020 Events мероприятия. Все права зачищены.</span>
                    <div>
                        <Link href={twitter} target="_blank" style={{ paddingRight: 16 }} >
                            <TwitterIcon style={{ fontSize: 32, color: '#1F2041' }} /> 
                        </Link>
                        <Link href={facebook} target="_blank" style={{ paddingRight: 16 }} >
                            <FacebookIcon style={{ fontSize: 32, color: '#1F2041' }} /> 
                        </Link>
                        <Link href={instagram} target="_blank" style={{ paddingRight: 16 }} >
                            <InstagramIcon style={{ fontSize: 32, color: '#1F2041' }} />
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer