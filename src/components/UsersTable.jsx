import React from "react";

export default function UsersTable({ results, handleClick }) {
	return (
		<div>
			<h3 className="text-primary my-3">User List</h3>
			<div className="table-responsive-md">
				<table className="table table-striped table-bordered table-hover">
					<thead>
						<tr className="text-center">
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">City</th>
							<th scope="col">Company</th>
						</tr>
					</thead>
					<tbody>
						{results &&
							results.map((user) => (
								<tr key={user.id} onClick={() => handleClick(user.id)}>
									<td>{user.name}</td>
									<td>
										<a href={"mailto:" + user.email}>{user.email}</a>
									</td>
									<td>{user.address.city}</td>
									<td>{user.company.name}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
