const initialState = {
  logged: false,
  name: "",
  lastname: "",
  edad: "",
  sex: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET_USER": {
      return {
        ...state,
        ...{
          logged: false,
          name: "",
          lastname: "",
          edad: "",
          sex: "",
        },
      };
    }
    default:
      return state;
  }
}
