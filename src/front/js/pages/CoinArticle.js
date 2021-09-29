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
						<div className="d-flex align-items-center">
							<img className="articleImage" src={item.image_url} />
							<div className="w-100">
								<h4>{item.title}</h4>
								<div className="col-12">
									<p>{item.text}</p>
								</div>
								<div className="col-12">
									<p>{item.date}</p>
								</div>
								<div className="d-flex align-items-center col-12">
									<a className="mx-auto" href={item.news_url}>
										<button type="button" className="button btn-info ">
											Read Article
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
