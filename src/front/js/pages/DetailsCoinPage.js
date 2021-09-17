import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Chart from "react-google-charts";
import { Context } from "../store/appContext";

export function DetailsCoinPage() {
	const [coin, setCoin] = useState(null);
	const [coinDetail, setCoinDetail] = useState(null);
	const [graphdata, setGraphData] = useState(undefined);
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=6&interval=daily`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setGraphData(data);
			});
	}, []);
	useEffect(() => {
		store.coins.map(coin => {
			if (coin.id == params.id) {
				setCoinDetail(coin);
			}
		});
	}, []);

	useEffect(() => {
		fetch(
			`https://api.coingecko.com/api/v3/coins/${
				params.id
			}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
		)
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
	console.log(coinDetail);
	return (
		<div>
			<img src={coin.image.small} />
			{coin.name}
			{coin.prices}
			{graphdata !== undefined ? (
				<div>
					<Chart
						width={"100%"}
						height={"auto"}
						chartType="LineChart"
						loader={<div>Loading Chart</div>}
						data={[
							["x", coin.name],
							["Day 1", graphdata.prices[0][1]],
							["Day 2", graphdata.prices[1][1]],
							["Day 3", graphdata.prices[2][1]],
							["Day 4", graphdata.prices[3][1]],
							["Day 5", graphdata.prices[4][1]],
							["Day 6", graphdata.prices[5][1]],
							["Day 7", graphdata.prices[6][1]]
						]}
						options={{
							hAxis: {
								title: "Last 7 Days"
							},
							vAxis: {
								title: "Value In USD"
							}
						}}
						rootProps={{ "data-testid": "1" }}
					/>
					{/* {coin.links} */}
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
}
