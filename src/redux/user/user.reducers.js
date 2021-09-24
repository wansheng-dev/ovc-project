import {
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_POST_REQUEST,
	USER_POST_SUCCESS,
	USER_POST_FAIL,
} from "./user.types";

export const userListReducer = (
	state = { loading: true, users: [] },
	action
) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true };
		case USER_LIST_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_LIST_FAIL:
			return { laoding: false, error: action.payload };
		default:
			return state;
	}
};

export const postListReducer = (
	state = { loading: true, posts: [] },
	action
) => {
	switch (action.type) {
		case USER_POST_REQUEST:
			return { loading: true };
		case USER_POST_SUCCESS:
			return {
				loading: false,
				posts: action.payload,
			};
		case USER_POST_FAIL:
			return { laoding: false, error: action.payload };
		default:
			return state;
	}
};
