import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import "./card.scss" 

export class DiscriptionCard extends Component {
    render() {
        return (
            <div className='card'>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <div className='card__info'>
                            <h3>{this.props.title}</h3>
                            <span>  
                                {new Intl.DateTimeFormat("ru").format(this.props.start)}
                                &nbsp;-&nbsp;
                                {new Intl.DateTimeFormat("ru").format(this.props.end)}
                            </span>
                            <p>{this.props.description}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={this.props.image} alt=""></img>         
                    </Grid>    
                </Grid>  
            </div>
        )
    }
}

export default DiscriptionCard
