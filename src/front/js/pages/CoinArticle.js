import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import "../../styles/home.scss";

export const CoinArticle = () => {
	const { store, actions } = useContext(Context);
	console.log(store.news);
	return (
		<div className="container">
			{store.news.map((item, position) => {
				return (
					<div className=" row my-5 border shadow rounded bg-light" key={position}>
						{/* <img src={item.proof_image_link} /> */}
						<h3>{item.title && item.title}</h3>
						<p>{item.author && item.author}</p>
						<a href={item.link}>Read Article</a>
					</div>
				);
			})}
		</div>
	);
};
