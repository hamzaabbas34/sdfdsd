import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="p-10">
			Home
			<h3 className=" p-5">
				<Link to="/about">About</Link>
			</h3>
		</div>
	);
}
