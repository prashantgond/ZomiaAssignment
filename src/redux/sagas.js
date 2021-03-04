import { put, takeLatest, all, call } from 'redux-saga/effects';
import { onSignUp } from '../services/api';


function* signUp(action) {
    const json = yield call(onSignUp, action);
    console.log('articles response', json)
    // Instructing middleware to dispatch corresponding action.
    yield put({
        type: 'SUCESS_REG',
        json: json.data.articles
    });
}

function* actionWatcher() {
    yield takeLatest('ON_REGISTARTION', signUp)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}