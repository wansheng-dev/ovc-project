import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import PostsTable from "./components/PostsTable";

import { useDispatch, useSelector } from "react-redux";
import { listPosts, listUsers } from "./redux/user/user.actions";

function App() {
	const userList = useSelector((state) => state.userList);
	const postList = useSelector((state) => state.postList);

	const [users, setUsers] = useState([]);
	const [results, setResults] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listUsers());
	}, [dispatch]);

	useEffect(() => {
		if (!userList.loading) {
			setUsers(userList.users);
		}
	}, [userList]);

	useEffect(() => {
		dispatch(listPosts(currentUser));
	}, [dispatch, currentUser]);

	useEffect(() => {
		let filtered = users;
		if (search !== "") {
			filtered = filtered.filter((user) =>
				user.name.toLowerCase().includes(search.toLowerCase())
			);
		}
		if (!filtered.includes(currentUser)) {
			setCurrentUser(null);
		}
		setResults(filtered);
	}, [users, search, currentUser]);

	const handleClick = (id) => {
		let user = userList.users.find((user) => user.id === id);
		setCurrentUser(user);
	};

	return (
		<div className="App container-fluid px-0">
			<div className="container my-5">
				<input
					className="form-control mb-2 w-100"
					type="text"
					placeholder="Search by name"
					onChange={(e) => setSearch(e.target.value)}
					data-testid="input-element"
				/>
				{users.length === 0 ? (
					<h1 className="text-secondary">Loading...</h1>
				) : (
					<>
						{results.length > 0 ? (
							<>
								<UsersTable results={results} handleClick={handleClick} />
								{currentUser && (
									<PostsTable postList={postList} currentUser={currentUser} />
								)}
							</>
						) : (
							<h3 className="text-danger">No Results</h3>
						)}
					</>
				)}
			</div>
			<footer className="footer fixed-bottom bg-light text-secondary text-center py-3">
				<p className="my-1">
					Created by{" "}
					<a
						href="http://www.wanshengdev.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Wan Sheng
					</a>
				</p>
				<p className="my-1">
					Tech Stack: Create-React-App, Redux, Sass, Bootstrap, and Jest
				</p>
			</footer>
		</div>
	);
}

export default App;
