const initialState = {
  email: '',
  password: '',
  fullName: ''
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_DETAIL': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'RESET_AUTH': {
      return initialState
    }
    case 'REGISTER_USER': {
      return {
        ...state,
        successRegister: action.payload
      }
    }
    case 'LOGIN_USER': {
      return {
        ...state,
        successlogin: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
export default authReducer;