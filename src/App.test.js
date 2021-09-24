import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import UsersTable from "./components/UsersTable";
import PostsTable from "./components/PostsTable";
import { userListReducer } from "./redux/user/user.reducers";

describe("render app", () => {
	test("should render search bar", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const element = screen.getByTestId("input-element");
		expect(element).toBeInTheDocument();
	});

	test("should render user table headers", async () => {
		render(<UsersTable title="User List" />);
		const element = screen.getByText(/User List/i);
		expect(element).toBeInTheDocument();
	});

	test("should render users", () => {
		const results = [
			{
				id: 1,
				name: "Leanne Graham",
				email: "Sincere@april.biz",
				address: {
					city: "Gwenborough",
				},
				company: {
					name: "Romaguera-Crona",
				},
			},
		];
		const handleClick = () => console.log("click");
		render(<UsersTable results={results} handleClick={handleClick} />);
		const element = screen.getByText(/Leanne/i);
		expect(element).toBeInTheDocument();
	});

	test("shoud render post table & current user", () => {
		const currentUser = {
			id: 1,
			name: "Leanne Graham",
		};
		const postList = { posts: [] };
		render(<PostsTable currentUser={currentUser} postList={postList} />);
		const headingElement = screen.getByText(/Leanne/i);
		const tableElement = screen.getByText(/Title/i);
		expect(headingElement).toBeInTheDocument();
		expect(tableElement).toBeInTheDocument();
	});
});

describe("reducer tests", () => {
	test("should return initial state", () => {
		expect(userListReducer(undefined, {})).toEqual({
			loading: true,
			users: [],
		});
	});

	test("should return fetched users", () => {
		const prevState = { loading: true, users: [] };
		expect(userListReducer(prevState, { type: "USER_LIST_SUCCESS" })).toEqual({
			loading: false,
			users: undefined,
		});
	});
});
