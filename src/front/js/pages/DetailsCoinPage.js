import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Chart from "react-google-charts";

export function DetailsCoinPage() {
	const [coin, setCoin] = useState(null);
	const [graphdata, setGraphData] = useState(undefined);
	const params = useParams();

	useEffect(() => {
		fetch(process.env.BACKEND_URL + `/api/coin/${params.id}/data`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setGraphData(data);
			});
	}, []);

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
			{graphdata !== undefined ? (
				<Chart
					width={"600px"}
					height={"400px"}
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
			) : (
				<p>Loading</p>
			)}
			{/* <Chart
				width={"100%"}
				height={350}
				chartType="CandlestickChart"
				loader={<div>Loading Chart</div>}
				data={[
					["day", "", "b", "c", "d"],
					["Mon", 20, 28, 38, 45],
					["Tue", 31, 38, 55, 66],
					["Wed", 50, 55, 77, 80],
					["Thu", 77, 77, 66, 50],
					["Fri", 68, 66, 22, 15],
					["Sat", 68, 66, 22, 15],
					["Sun", 68, 66, 22, 15]
				]}
				options={{
					legend: "none",
					bar: { groupWidth: "100%" }, // Remove space between bars.
					candlestick: {
						fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
						risingColor: { strokeWidth: 0, fill: "#0f9d58" } // green
					}
				}}
				rootProps={{ "data-testid": "2" }}
			/> */}
		</div>
	);
}
