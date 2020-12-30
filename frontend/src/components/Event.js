import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getEvent } from '../actions/event';

import DiscriptionCard from './block/DiscriptionCard'
import OrgCard from './block/OrgCard'

class Event extends Component {

    static propTypes = {
        event: PropTypes.array.isRequired,
        getEvent: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getEvent();
    };

    render() {
        return (
            <Fragment>
                {this.props.event.map( e => (
                    <div key={e.id}>
                        <h1>{e.eventTitle}</h1>

                        <DiscriptionCard 
                            title={e.keyWords} 
                            start={new Date(e.startDate)} 
                            end={new Date(e.endDate)} 
                            image={e.image}
                            description={e.shortDescription}></DiscriptionCard>

                        {e.orgs.map((value, index) => {
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
                        })}

                        <h2>Подроная информация о мероприятии</h2>
                        <p>{e.longDescription}</p>

                    </div>
                ))}
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    event: state.event.event
});

export default connect(mapStateToProps, { getEvent })(Event);
