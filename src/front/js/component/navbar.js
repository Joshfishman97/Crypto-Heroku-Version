import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import { FavoriteContext } from "../component/favoriteList";
import "../../styles/home.scss";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState("");
	// const favorites = useContext(FavoriteContext);

	return (
		<nav className=" navbar navbar-primary mb-3">
			<Link to="/">
				<span className="d-flex justify-content-start navbar-brand mb-0 h1">
					<img src="https://res.cloudinary.com/djwr65ikt/image/upload/v1631056485/images_wb4mx0.png" />
				</span>
			</Link>
			{/* BUTTONS TO PAGES */}

			<div className="ml-auto">
				<Link to="/coinpage">
					<button className="btn navButton">Coins</button>
				</Link>
				<Link to="/articles">
					<button className="btn navButton">News</button>
				</Link>
				<Link to="/videos">
					<button className="btn navButton">Videos</button>
				</Link>
				<Link to="/events/">
					<button className="btn navButton">Events</button>
				</Link>
				<Link to="/aboutus/">
					<button className="btn navButton">About Us</button>
				</Link>
				<Link to="/login/">
					<button className="btn navButton">Login</button>
				</Link>
				<Link to="/register/">
					<button className="btn navButton">Register</button>
				</Link>
			</div>
		</nav>
	);
};
