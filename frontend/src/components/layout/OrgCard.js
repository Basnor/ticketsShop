import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

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
                    </Grid>  
                </Grid>  
            </div>
        )
    }
}

export default OrgCard