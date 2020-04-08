import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<nav className="nav nav-masthead justify-content-center">
				<Link to="/">
					{" "}
					<a className="nav-link active" href="#">
						Home
					</a>
				</Link>
				<Link to="/properties">
					<a className="nav-link" href="#">
						Properties
					</a>
				</Link>
				<Link to="/contact">
					<a className="nav-link" href="#">
						Contact
					</a>
				</Link>
			</nav>
		</nav>
	);
};
