import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
						<th scope="col">symbol</th>
						<th scope="col">Link</th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin, i) => {
						return (
							<tr key={i}>
								<th scope="row">{coin.id}</th>
								<td>{coin.namecoin}</td>
								<td>{coin.symbol}</td>
								<td>
									{" "}
									<Link to={"/coinpage/" + coin.coingecko_id}>
										<span>Link to: {coin.namecoin}</span>
									</Link>
								</td>
								{/* <td>{coin.market_data.current_price.usd}</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
