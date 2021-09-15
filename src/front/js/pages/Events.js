import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Event = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.news.map((item, position) => {
				return (
					<div key={position}>
						<img src={item.proof_image_link} />
						<h1>{item.name}</h1>
						<p>{item.description}</p>
						<a href={item.link}>Sign Up</a>
					</div>
				);
			})}
		</div>
	);
};
