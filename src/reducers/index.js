import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as registerReducer } from './registerReducer'
import { reducer as teamReducer } from './teamReducer'

const reducers = combineReducers({
    registerReducer,
    teamReducer,
    form: formReducer
})

export default reducers