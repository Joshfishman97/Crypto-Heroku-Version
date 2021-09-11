import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function DetailsCoinPage() {
	const [coin, setCoin] = useState(null);
	const [graph, setGraph]
	const params = useParams();

	useEffect(() => {
		fetch(process.env.BACKEND_URL + `/api/coin/${params.id}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setCoin(data);
			});
	
			fetch(process.env.BACKEND_URL + `api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setGraph(data);
			});
			if(graph === null){
				return null
			}
		}, []);
	if (coin === null) {
		return null;
		
	}

	return (
		<div>
			{coin.name}
			<img src={coin.image.small} />
			{coin.prices}
		</div>
	);
}
