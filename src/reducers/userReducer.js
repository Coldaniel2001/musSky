

export const userReducer = (state , action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {...state, isLogged:true, user: action.payload}
    case "LOGIN_USER":
      return {...state,  isLogged: true, user: action.payload };
    case "LOGOUT":
      return {...state, isLogged:false, user:null};
    case "CHANGE_PASSWORD": 
      return {...state, user: action.payload};
      case "EDIT_IMAGE":
        return {...state, user: {...state.user, picture: action.payload}}
    default:
      return state;
  }
};
