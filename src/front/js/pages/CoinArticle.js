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
						<img src={item.image_url} />
						<h3>{item.title}</h3>
						<p>{item.text}</p>

						<a className="mx-auto" href={item.news_url}>
							<button type="button" className="btn btn-info ">
								Read Article
							</button>
						</a>
					</div>
				);
			})}
		</div>
	);
};
