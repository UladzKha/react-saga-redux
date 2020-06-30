import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_VIDEOS, VIDEOS_RECEIVED } from '../actions'

function* fetchVideos({ searchCriteria }) {

    console.log('searchCriteria', searchCriteria.text)
    const json = yield fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7CXIVUSzluQx4LKiJ0ZjuMOA3QuGf3FY&part=snippet&type=video&q=${searchCriteria.text}`
    )
        .then(response => response.json())
        .catch(err => console.log('Error', err))

    yield put({ type: VIDEOS_RECEIVED, json: json.items });
}

function* actionWatcher() {
    yield takeLatest(FETCH_VIDEOS, fetchVideos)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}