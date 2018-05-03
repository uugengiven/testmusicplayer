import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class CurrentTrack extends Component {
    render () {
        return (
            <Text>
                {this.props.playback.state}
            </Text>
        )
    }
}

function mapStateToProps(state) {
    return {
        playback: state.playback
    };
}

module.exports = connect(mapStateToProps)(CurrentTrack);