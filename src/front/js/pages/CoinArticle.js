import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const CoinArticle = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.news.map((item, position) => {
				return (
					<div key={position}>
						{/* <img src={item.proof_image_link} /> */}
						<h1>{item.title && item.title}</h1>
						{item.content &&
							item.content.map((content, index) => {
								return (
									<a key={index} href={content.base}>
										Sign Up
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
