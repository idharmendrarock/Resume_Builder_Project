// This is a redux store for storing all the reducers********************************

import { createStore } from "redux";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer);

export default store;
