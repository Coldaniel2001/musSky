export const initialState = {
  isNewUser: false,
  isLogged: false,
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {isNewUser: true, isLogged:true, user: action.payload}
    case "LOGIN_USER":
      return {...state,  isLogged: true, user: action.payload };
    case "LOGOUT":
      return {...initialState};
    case "CHANGE_PASSWORD": 
      return {...state, user: action.payload}
    default:
      return state;
  }
};
