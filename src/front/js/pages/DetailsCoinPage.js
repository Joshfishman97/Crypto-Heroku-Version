import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function DetailsCoinPage() {
	const [coin, setCoin] = useState(null);
	const params = useParams();

	useEffect(() => {
		fetch(process.env.BACKEND_URL + `/api/coin/${params.id}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setCoin(data);
			});
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
