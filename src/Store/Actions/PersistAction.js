export const saveUser = (userDetails) => {
  return {
    type: 'SAVE_USER',
    payload: userDetails
  }
}

export const setLoginUser = (loginUser) => {
  return {
    type: 'SET_LOGIN_USER',
    payload: userDetails
  }
}