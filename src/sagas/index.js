import { all, fork } from 'redux-saga/effects'

import registerSaga from './registerSaga'
import teamSaga from './teamSaga'

export default function* root() {
    yield all([
        fork(registerSaga),
        fork(teamSaga)
    ])
}