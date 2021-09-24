import React from "react";

export default function PostsTable({ postList, currentUser }) {
	return (
		<div className="posts-table">
			{postList.posts && (
				<div className="my-5">
					<h5 className="text-secondary my-3">{currentUser.name}'s Posts</h5>
					<table className="table table-bordered table-hover">
						<thead>
							<tr className="text-center">
								<th className="col-3">Title</th>
								<th className="col-9">Body</th>
							</tr>
						</thead>
						<tbody>
							{postList.posts.map((post) => (
								<tr key={post.id}>
									<td>{post.title}</td>
									<td>{post.body}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
