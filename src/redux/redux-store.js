import { combineReducers, createStore } from "redux";
import { profileReducer } from "../redux/reducers/profileReducer";
import { dialogsReducer } from "../redux/reducers/dialogsReducer";
import { sidebarReducer } from "../redux/reducers/sidebarReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
