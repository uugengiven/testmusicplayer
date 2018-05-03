import { combineReducers } from 'redux';

function playbackReducer(state = {state: "wargle"}, action) {
    switch(action.type) {
        case 'PLAYBACK_INIT':
            return {
                ...state,
                init: true
            };
        case 'PLAYBACK_STATE':
            return {
                ...state,
                state: action.state
            };
        case 'PLAYBACK_TRACK':
            return {
                ...state,
                currentTrack: action.track
            };
        default:
            return state;
    }
}

module.exports = combineReducers({
    playback: playbackReducer
});

