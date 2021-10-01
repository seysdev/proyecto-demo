import { createStore } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "modules/users/store";

const initialStateLoader = {
  flag: false,
};

function loaderReducer(state = initialStateLoader, action) {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        flag: action.payload,
      };

    default:
      return state;
  }
}

const reducers = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
