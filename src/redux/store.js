import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userListReducer, postListReducer } from "./user/user.reducers";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	userList: userListReducer,
	postList: postListReducer,
});

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
