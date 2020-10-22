import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getEvent } from '../actions/event';

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
                <h2>Data from server</h2>
                <div>
                    {this.props.event.map( e => (
                        <div key={e.id}>
                            {e.title}
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    event: state.event.event
});

export default connect(mapStateToProps, { getEvent })(Event);
