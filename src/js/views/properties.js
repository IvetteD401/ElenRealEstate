import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import images from "../../img/coral springs apt 1/1.jpg";
// import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Properties = () => {
	const { store, actions } = useContext(Context);
	return (
		// <section className="jumbotron homeJumbo resize lead text-center mx-auto">
		<div className="card about resize mx-auto" style={{ maxWidth: "100%" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={images} className="card-img" alt="..." />
				</div>
				<div className="container">
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">
								<strong>3199 Coral Hills Dr. Unit 1</strong>
							</h2>
							<h4>
								<p className="card-text">
									<strong>3 Beds/ 2 Baths</strong>
									<br /> Currently not available.{" "}
								</p>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
