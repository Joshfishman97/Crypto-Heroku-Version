import React, { useEffect, useState } from "react";

export function CoinPage() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/api/coin")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setCoins(data);
			});
	}, []);

	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Coin</th>
						<th scope="col">Price</th>
						<th scope="col">Daily Gain/Loss</th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin, i) => {
						return (
							<tr>
								<th scope="row">{coin.id}</th>
								<td>{coin.namecoin}</td>
								<td>{coin.price}</td>
								<td>{coin.usd_24th_change}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
