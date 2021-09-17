import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import "../../styles/home.scss";

export const CoinArticle = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.news.map((item, position) => {
				return (
					<div key={position}>
						{/* <img src={item.proof_image_link} /> */}
						<h3>{item.title && item.title}</h3>
						{item.content &&
							item.content.map((content, index) => {
								return (
									<a key={index} href={content.base}>
										Read Article
									</a>
								);
							})}
						<p>{item.author && item.author}</p>
					</div>
				);
			})}
		</div>
	);
};
