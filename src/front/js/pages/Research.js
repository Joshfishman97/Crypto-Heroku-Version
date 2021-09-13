import React, { useEffect, useState } from "react";
import { Context } from "../store/appContext";

export function Research() {
	const [market, setMarket] = useState([]);
	const { store, actions } = React.useContext(Context);

	return (
		<div>
			<h1>Hello</h1>
			{store.news.map((item, position) => {
				<div key={position}>
					<h1>{item.name}</h1>
					<p>{item.description}</p>
					<a href={item.link}>more info</a>
				</div>;
			})}
		</div>
	);
}
