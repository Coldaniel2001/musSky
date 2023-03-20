import types from "./Type/type";

const RegisterReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case types.name:
      return {
        ...state,
        name: action.payload,
      };
    case types.surname:
      return {
        ...state,
        surname: action.payload,
      };
    case types.username:
      return {
        ...state,
        username: action.payload,
      };
    case types.email:
      return {
        ...state,
        email: action.payload,
      };
    case types.password:
      return {
        ...state,
        password: action.payload,
      };
    case types.passwordRepeat:
      return {
        ...state,
        passwordRepeat: action.payload,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
