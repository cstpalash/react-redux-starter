import { all, fork } from 'redux-saga/effects'

import registerSaga from './registerSaga'

export default function* root() {
    yield all([fork(registerSaga)])
}