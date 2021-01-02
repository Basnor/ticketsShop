import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./org.scss" 

export class OrgCard extends Component {
    render() {
        return (
            <div className='org'>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={12} sm={4}>
                        <img src={this.props.photo} alt=""></img>         
                    </Grid>  
                    <Grid item xs={12} sm={8}>
                        <h2>{this.props.name} {this.props.sername}</h2>
                        <p>{this.props.about}</p>

                        {this.props.links.map((value, index) => {
                            const isInstagram = value.instagram ? true : false;
                            const isFacebook = value.facebook ? true : false;
                            const isLinkedIn = value.linkedein ? true : false;
                            const isTwitter = value.twitter ? true : false;
                            return (
                                <div key={index} style={{ paddingTop: 20 }}>
                                    { isInstagram ? 
                                        <Link href={value.instagram} target="_blank" style={{ paddingRight: 16 }} >
                                            <InstagramIcon style={{ fontSize: 32, color: '#1F2041' }} />
                                        </Link>
                                    : "" }
                                    { isFacebook ? 
                                        <Link href={value.facebook} target="_blank" style={{ paddingRight: 16 }} >
                                            <FacebookIcon style={{ fontSize: 32, color: '#1F2041' }} /> 
                                        </Link>
                                    : "" }
                                    { isLinkedIn ? 
                                        <Link href={value.linkedein} target="_blank" style={{ paddingRight: 16 }} >
                                            <LinkedInIcon style={{ fontSize: 32, color: '#1F2041' }} /> 
                                        </Link>
                                    : "" }
                                    { isTwitter ? 
                                        <Link href={value.twitter} target="_blank" style={{ paddingRight: 16 }} >
                                            <TwitterIcon style={{ fontSize: 32, color: '#1F2041' }} /> 
                                        </Link>
                                    : "" }
                                </div>
                            )
                        })}
                    </Grid>  
                </Grid>  
            </div>
        )
    }
}

export default OrgCard