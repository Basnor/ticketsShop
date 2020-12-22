import React, { Component } from 'react'

//import "./card.scss" 

export class DiscriptionCard extends Component {
    render() {
        return (
            <div className='card'>
                <h3>{this.props.title}</h3>
                <span>  
                    {new Intl.DateTimeFormat("ru").format(this.props.start)}
                    &nbsp;-&nbsp;
                    {new Intl.DateTimeFormat("ru").format(this.props.end)}
                </span>
                <p>{this.props.description}</p>
                <img src={this.props.image} alt=""></img>              
            </div>
        )
    }
}

export default DiscriptionCard
