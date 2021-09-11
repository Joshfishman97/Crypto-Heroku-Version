import React, { useEffect, useState } from "react";

export function MarketPlace() {
	const [market, setMarket] = useState([]);

	useEffect(() => {
		fetch("https://api.coingecko.com/api/v3/coins/eth")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setMarket(data);
			});
	}, []);

	return <div className="container" />;
}
