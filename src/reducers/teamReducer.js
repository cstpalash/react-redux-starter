export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchTeams = () => {
    return {
      type: FETCH_REQUEST,
      payload: { busy : true }
    }
}

const ACTION_HANDLERS = {
  [FETCH_REQUEST]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [FETCH_SUCCESS]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [FETCH_FAILED]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
    teams : [],
    busy : false
};

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}