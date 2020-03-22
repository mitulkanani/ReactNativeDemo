const initialState = {
  users: [],
  loggedinUser: undefined
};

const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    }
    case 'SET_LOGIN_USER': {
      return {
        ...state,
        loggedinUser: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default persistReducer;