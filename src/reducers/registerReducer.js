export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const register = () => {
    return {
      type: REGISTER_REQUEST,
      payload: { busy : true }
    }
}

const ACTION_HANDLERS = {
  [REGISTER_REQUEST]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [REGISTER_SUCCESS]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [REGISTER_FAILED]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
    teamName : '',
    password : '',
    details : '',
    busy : false
};

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}