import { FETCH_VIDEOS, VIDEOS_RECEIVED } from '../actions'

const reducer = (state = {}, action) => {
    console.log('ACTION!!', action)
    switch (action.type) {
        case FETCH_VIDEOS:
            return { ...state, loading: true };
        case VIDEOS_RECEIVED:
            return { ...state, videos: action.json[0], loading: false }
        default:
            return state;
    }
};
export default reducer;