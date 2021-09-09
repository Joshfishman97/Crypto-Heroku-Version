import React, { useEffect, useState } from "react";

export function CoinPage() {
	const [coin, setCoin] = useState([]);

	// useEffect(() => {
	// 	fetch("#/markets")
	// 	.then(res => {
	// 		return res.json();
	// 	})
	// 	.then(data => {
	// 		setMarket(data);
	// 	})
	// }, []);

	return (
		<div className="d-flex flex-column">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Coin</th>
						<th scope="col">Price</th>
						<th scope="col">Daily</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Bitcoin</td>
						<td>Price</td>
						<td>Daily</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Ethereum</td>
						<td>Price</td>
						<td>Daily</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Cardano</td>
						<td>Price</td>
						<td>Daily</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Tether</td>
						<td>Price</td>
						<td>Daily</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>Binance Coin</td>
						<td>Price</td>
						<td>Daily</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
