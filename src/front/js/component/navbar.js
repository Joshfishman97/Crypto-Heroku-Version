import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import { FavoriteContext } from "../component/favoriteList";
// import "../../styles/home.scss";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState("");
	const favorites = useContext(FavoriteContext);

	return (
		<nav className=" navbar navbar-dark mb-3">
			<Link to="/">
				<span className="d-flex justify-content-start navbar-brand mb-0 h1">
					<img src="#" />
				</span>
			</Link>
			{/* BUTTONS TO PAGES */}

			<div className="ml-auto">
				<Link to="/markets">
					<button className="btn navButton">Markets</button>
				</Link>
				<Link to="/videos">
					<button className="btn navButton">Videos</button>
				</Link>
				<Link to="/research/">
					<button className="btn navButton">Research</button>
				</Link>
				<Link to="/about/">
					<button className="btn navButton">About</button>
				</Link>
			</div>
			{/* <div className="d-flex justify-content-center dropdown">
				<button
					onClick={e => {
						if (showMenu == "") {
							setShowMenu("show");
						} else {
							setShowMenu("");
						}
					}}
					className="btn navButton dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					dataBsToggle="dropdown"
					ariaExpanded="false">
					Favorites List
				</button>
				<ul className={"dropdown-menu" + showMenu} ariaLabelledBy="dropdownMenuButton1">
					{favorites.favoriteArray.map((fav, index) => {
						return (
							<li key={index}>
								<a className="dropdown-item" href="#">
									{fav}
								</a>
							</li>
						);
					})}
				</ul>
			</div> */}
		</nav>
	);
};
