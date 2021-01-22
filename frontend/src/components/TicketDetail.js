import React, { Component, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTicket } from '../actions/ticket';
import { addToCart } from '../actions/cart';
import { withStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import DiscriptionCard from './common/DiscriptionCard'
import OrgCard from './common/OrgCard'
import "./common/button.scss"

const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    color: rgba(31, 32, 65, 1);

    display: block;
    padding: 1rem;
`;

const AddBtn = (props) => {
	const dispatch = useDispatch();

    return <button className="btn btn_purple btn_right" style={{margin: '1rem'}}
        onClick={() => {
            dispatch(addToCart(props.ticket))
        }}> Добавить в корзину
        <AddShoppingCartIcon 
            style={{ fontSize: 20, 
            paddingLeft: '1rem',
            display: 'block'}}>
        </AddShoppingCartIcon>
    </button>
}

class TicketDetail extends Component {

    static propTypes = {
        ticket: PropTypes.object.isRequired,
        getTicket: PropTypes.func.isRequired
    };

    componentDidMount() {
        const split = window.location.href.split("/");
        let url = split.slice(0, split.length - 2).join("/");
        const ticketID = this.props.match.params.ticketID;
        this.props.getTicket(ticketID, url);
    };

    getDate(start, end) {
        let formStartDate;
        let formEndDate;

        const dateFormatter = new Intl.DateTimeFormat("ru");

        if (!start || !end) return;

        formStartDate = dateFormatter.format(new Date(start));
        formEndDate = dateFormatter.format(new Date(end));

        if (formStartDate === formEndDate) return formStartDate;

        return `${formStartDate} - ${formEndDate}`;
    }

    render() {
        const { ticket } = this.props;

        const StyledGrid = withStyles((theme) => ({
            root: {
                padding: '1rem',
                marginTop: '3rem', 
                backgroundColor: 'rgba(31, 32, 65, 0.05)',

                alignItems: 'center',
            }
        }))(Grid);

        const timeFormatter = new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric"
        });

        return (
            <Fragment>
                <div className='content' key={ticket.id}>
                    <h1>{ticket.ticketTitle}</h1>

                    <DiscriptionCard 
                        title={ticket.keyWords} 
                        start='' 
                        end='' 
                        image={ticket.image}
                        description={ticket.description}></DiscriptionCard>

                    {ticket.orgs ? ticket.orgs.map((value, index) => {
                        return (
                            <OrgCard
                                key={index}
                                name={value.fName}
                                sername={value.sName}
                                about={value.about}
                                photo={value.photo}
                                links={value.links}
                            ></OrgCard>
                        )
                    }) : ''}

                    <StyledGrid container>
                        <Grid item xs={12} sm={3}>
                            <Info>{ticket.ticketTitle}</Info>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Info style={{fontSize: '1.8rem', color: 'rgba(31, 32, 65, 0.75)'}}>
                                Дата: {this.getDate(ticket.startDate, ticket.endDate)}<br />
                                Начало: {ticket.startDate ? timeFormatter.format(new Date(ticket.startDate)) : ''}<br />
                                Окончание: {ticket.endDate ? timeFormatter.format(new Date(ticket.endDate)) : ''}<br />
                            </Info>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Info style={{fontWeight: '600'}}>{ticket.price} ₽</Info>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <AddBtn ticket={ticket}/>
                        </Grid>
                    </StyledGrid>

                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    ticket: state.ticket.ticket
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTicket: (ticketID, url) => dispatch(getTicket(ticketID, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
