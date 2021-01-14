import React, { Component, Fragment } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTicket } from '../actions/ticket';
import { removeItem, subtractQuantity, addQuantity } from '../actions/cart';

const TicketList = (props) => {
    const list = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const listKeys = Object.keys(list);

    return (
        <Fragment>
            {listKeys.map(key => (
                <div key={`listitem_${key}`}>
                    <span>{list[key].ticketId}</span>
                </div>
            ))}
        </Fragment>
    );
}

class Basket extends Component {
    static propTypes = {
        ticket: PropTypes.object.isRequired,
        getTicket: PropTypes.func.isRequired,
    };

    render() {
        const { ticket } = this.props;

        return (
            <Fragment>
                <div>
                    <h1>Корзина</h1>

                    <TicketList />
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    ticket: state.ticket.ticket,
});

const mapDispatchToProps= (dispatch)=>{
    return {
        getTicket: (ticketID, url) => dispatch(getTicket(ticketID, url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
