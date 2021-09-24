import axios from "axios";

import {
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_POST_REQUEST,
	USER_POST_SUCCESS,
	USER_POST_FAIL,
} from "./user.types";

export const listUsers = () => async (dispatch) => {
	dispatch({
		type: USER_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);
		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LIST_FAIL,
			payload: error.message,
		});
	}
};

export const listPosts = (user) => async (dispatch) => {
	dispatch({
		type: USER_POST_REQUEST,
	});

	try {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
		);
		dispatch({ type: USER_POST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_POST_FAIL,
			payload: error.message,
		});
	}
};
