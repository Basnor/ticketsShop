import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTicket } from '../actions/ticket';
import styled from 'styled-components';

const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: rgba(31, 32, 65, 0.50);

    display: block;
    margin: 1rem 2rem;
`;

const TicketType = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 4.0rem;
    color:  #1F2041;

    margin: 0 2rem;
    padding-top: 4rem;
`;

const darkBackStyle = {
    backgroundColor: 'rgba(31, 32, 65, 0.05)',
    paddingBottom: '3rem',
};

class Tickets extends Component {

    static propTypes = {
        ticket: PropTypes.array.isRequired,
        getTicket: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTicket();
    };

    render() {
        const StyledCard = withStyles((theme) => ({
            root: {
                maxWidth: 345,
            }
        }))(Card);

        const StyledGrid = withStyles((theme) => ({
            root: {
                padding: '1rem',
            }
        }))(Grid);

        const StyledCardContent = withStyles((theme) => ({
            root: {
                minHeight: '7rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }
        }))(CardContent);

        const timeFormatter = new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric"
        });

        return (
            <Fragment>
                <h1>Билеты</h1>
                <div className='content'>
                    {this.props.ticket.map( e => (
                        <div key={e.id} style={ e.id == 1 ? darkBackStyle : null }>
                            <TicketType>{e.ticketType}</TicketType>
                            <Info>{e.info}</Info>

                            <Grid container style={{padding: '1rem'}}>
                                {e.tickets.map((value, index) => {
                                    return (
                                        <StyledGrid item xs={12} sm={6} md={4} key={index}>
                                            <StyledCard>
                                                <Link href="/about/" component={CardActionArea}>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Ticket image"
                                                        height="194"
                                                        image={value.image}
                                                        title="Ticket image"
                                                    />
                                                    <StyledCardContent>
                                                        <h6>{value.ticketTitle}</h6>
                                                        <time>Время: {timeFormatter.format(new Date(value.startDate))} - {timeFormatter.format(new Date(value.endDate))}</time>
                                                    </StyledCardContent>
                                                </Link>
                                            </StyledCard>
                                        </StyledGrid>
                                    )
                                })}
                            </Grid>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket.ticket
});

export default connect(mapStateToProps, { getTicket })(Tickets);
