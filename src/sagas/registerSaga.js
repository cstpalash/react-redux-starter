import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

import * as actions from '../reducers/registerReducer'

let defaultState = {
  teamName : '',
  password : '',
  details : '',
  busy : false
}

function* registerRequest() {
    yield delay(5000);
    yield put({
        type: actions.REGISTER_SUCCESS,
        payload: {
            ...defaultState,
            busy : false
        }
    });
}

export default function* sagas() {
  yield takeLatest(actions.REGISTER_REQUEST, registerRequest);
}