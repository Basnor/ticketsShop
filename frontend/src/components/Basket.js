import React, { Component, Fragment } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTickets } from '../actions/ticket';
import { removeItem, subtractQuantity, addQuantity, removeCarts } from '../actions/cart';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import "./common/button.scss";

const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    color: rgba(31, 32, 65, 1);

    display: block;
    padding: 1rem;
`;

const InfoCounter = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    color: rgba(31, 32, 65, 1);

    padding: 0 1.4rem;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;

    border-top: 0.1rem solid rgba(31, 32, 65, 0.75);
    border-bottom: 0.1rem solid rgba(31, 32, 65, 0.75);
`;

const SubB = styled.button`
    color: rgba(31, 32, 65, 1);
    border-radius: 0.4rem 0 0 0.4rem;
    display: inline-flex;
    padding: 1rem 1rem;
`;

const AddB = styled.button`
    color: rgba(31, 32, 65, 1);
    border-radius: 0 0.4rem 0.4rem 0;
    display: inline-flex;
    padding: 1rem 1rem;
`;

const TicketList = (props) => {
    const { isLoading, isAuthenticated, user } = props.auth;
    const dispatch = useDispatch();
    const list = useSelector(state => state.cart);

    const listKeys = Object.keys(list);

    const StyledGrid = withStyles((theme) => ({
        root: {
            padding: '1rem',
            borderRadius: '0.4rem',
            backgroundColor: 'white',
            alignItems: 'center',
        }
    }))(Grid);

    const timeFormatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric"
    });

    const DeleteBtn = (props) => {
        const dispatch = useDispatch();
    
        return <button className="btn btn_white btn_right" style={{margin: '1rem'}}
            onClick={() => {
                dispatch(removeItem(props.item));
            }}> Удалить
            <DeleteOutlineIcon 
                style={{ fontSize: 20, 
                paddingLeft: '1rem',
                display: 'block'}}>
            </DeleteOutlineIcon>
        </button>
    }

    const SubBtnCounter = (props) => {
        const dispatch = useDispatch();
    
        return <SubB className="btn btn_white"
            onClick={() => {
                dispatch(subtractQuantity(props.item));
            }}>
            <RemoveIcon 
                style={{ fontSize: 20, 
                display: 'block'}}>
            </RemoveIcon>
        </SubB>
    }

    const AddBtnCounter = (props) => {
        const dispatch = useDispatch();
    
        return <AddB className="btn btn_white"
            onClick={() => {
                dispatch(addQuantity(props.item));
            }}>
            <AddIcon 
                style={{ fontSize: 20, 
                display: 'block'}}>
            </AddIcon>
        </AddB>
    }

    const TicketDate = (props) => {
        let formStartDate;
        let formEndDate;
    
        const dateFormatter = new Intl.DateTimeFormat("ru");
    
        if (!props.start || !props.end) return;
    
        formStartDate = dateFormatter.format(new Date(props.start));
        formEndDate = dateFormatter.format(new Date(props.end));
    
        return <Info style={{fontSize: '1.8rem', color: 'rgba(31, 32, 65, 0.75)'}}>
            Дата: {(formStartDate === formEndDate)? formStartDate : `${formStartDate} - ${formEndDate}`}<br />
            Начало: {props.start ? timeFormatter.format(new Date(props.start)) : ''}<br />
            Окончание: {props.end ? timeFormatter.format(new Date(props.end)) : ''}<br />
        </Info>
    }

    return (
        <Fragment>
            <div className='content' style={{backgroundColor: 'rgba(31, 32, 65, 0.05)', paddingBottom:'2rem'}}>
                {listKeys.map(key => (
                    <div key={`listitem_${key}`} style={{padding: '2rem'}}>

                        {props.tickets.filter( e => e.id == list[key].ticketId).map( e => (

                            <StyledGrid container key={e.id}>
                                <Grid item xs={12} md={3}>
                                    <Info>{e.ticketTitle}</Info>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TicketDate start={e.startDate} end={e.endDate} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <div>
                                        <SubBtnCounter item={key}/>
                                        <InfoCounter>{list[key].num}</InfoCounter>
                                        <AddBtnCounter item={key}/>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Info style={{fontWeight: '600'}}>{e.price}&nbsp;₽</Info>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <DeleteBtn item={key}/>
                                </Grid>
                            </StyledGrid>

                        ))}
                    </div>
                ))}

                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap-reverse', margin: '0 2rem'}}>
                    <button className="btn btn_white" onClick={() => {
                        dispatch(removeCarts());
                    }}>Очистить корзину
                    </button>
                    {isAuthenticated ? 
                        <button className="btn btn_purple btn_right">
                            Оформить заказ
                        </button>
                    : ''} 
                </div>
            </div>
        </Fragment>
    );
}

class Basket extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        tickets: PropTypes.array.isRequired,
        getTickets: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTickets();
    };

    render() {
        const { auth, tickets } = this.props;

        return (
            <Fragment>
                <div>
                    <h1>Корзина</h1>

                    <TicketList tickets={tickets} auth={auth}/>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    tickets: state.ticket.tickets,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(getTickets()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
