import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_VIDEOS, VIDEOS_RECEIVED } from '../actions'

function* fetchVideos({searchCriteria}) {
    console.log('URL',searchCriteria)

    const json = yield fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAcK7DkZOxwRywdYB-iK9JXa5dE5B7TclI&part=snippet&type=video&q=${searchCriteria}`
    )
        .then(response => response.json(),);
    yield put({ type: VIDEOS_RECEIVED, json: json.items, });
}

function* actionWatcher() {
    yield takeLatest(FETCH_VIDEOS, fetchVideos)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}