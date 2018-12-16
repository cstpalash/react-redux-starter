import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as registerReducer } from './registerReducer'

const reducers = combineReducers({
    registerReducer,
    form: formReducer
})

export default reducers