export const LOGIN_REQUESTED = 'user/LOGIN_REQUESTED'
export const LOGIN = 'counter/LOGIN'

const initialState = {
  auth: 0,
  name: undefined,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: 
      return {
        ...state,
        isIncrementing: true
      }

    case LOGIN: 
      const {name} = action.payload;
      
      return {
        ...state,
        loading: false,
        name,
      }

    default:
      return state
  }
}
