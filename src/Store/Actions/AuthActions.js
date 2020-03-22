export const setLogiCredential = (loginData) => {
  return {
    type: 'SET_AUTH_DETAIL',
    payload: loginData
  }
}

export const resetAuthDetails = () => {
  return {
    type: 'RESET_AUTH'
  }
}

export const registerUser = () => (dispatch, getState) => {
  let users = getState().PersistReducer.users
  let user = users.filter(usr => usr.email == getState().AuthReducer.email)
  let success = user.length > 0 ? false : true
  debugger
  dispatch(
    {
      type: 'REGISTER_USER',
      payload: user.length > 0 ? undefined : getState().AuthReducer
    }
  )
}

export const loginUser = () => (dispatch, getState) => {
  debugger
  let users = getState().PersistReducer.users
  let user = users.filter(usr => usr.email == getState().AuthReducer.email)
  dispatch(
    {
      type: 'LOGIN_USER',
      payload: user.length > 0 ? user[0] : undefined
    }
  )
}