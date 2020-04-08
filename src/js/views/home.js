import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5 mx-auto">
		<main role="main" className="inner cover ">
			<h1 className="cover-heading mt-15">Elen Real Estate Co., LLC.</h1>
			<p className="lead">Manage payments. View available propeties. and much more!</p>
			<p className="lead">
				<Link to="/signin">
					<a href="#" className="btn btn-lg btn-secondary">
						Sign In
					</a>
				</Link>
				<br />
				<Link to="/signup">Sign up here!</Link>
			</p>
		</main>
		<footer className="mastfoot mt-auto" />
	</div>
);
