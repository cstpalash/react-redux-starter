import { delay } from 'redux-saga'
import { select, put, takeLatest } from 'redux-saga/effects'

import * as actions from '../reducers/teamReducer'

const data = [
    ['Pinaka', 'India-Pune-MGP'],
    ['Astra', 'India-Pune-BB'],
    ['Barak', 'UK-London-CW'],
    ['Trishul', 'US-Carry'],
    ['Prithvi', 'Singapore']
];

let id = 0;
function createData(name, location) {
    id += 1;
    return { id, name, location };
}


function* fetchTeams() {

    yield delay(2000);

    let state = yield select();

    const rows = [];

    for (let i = 0; i < 200; i += 1) {
        const randomSelection = data[Math.floor(Math.random() * data.length)];
        rows.push(createData(...randomSelection));
    }

    yield put({
        type: actions.FETCH_SUCCESS,
        payload: {
            ...state,
            teams : rows,
            busy : false
        }
    });
}

export default function* sagas() {
  yield takeLatest(actions.FETCH_REQUEST, fetchTeams);
}