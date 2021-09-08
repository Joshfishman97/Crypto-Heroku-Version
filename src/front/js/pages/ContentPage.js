import React, { useEffect, useState } from "react";

export function ContentPage() {
	const [market, setMarket] = useState([]);

	// useEffect(() => {
	// 	fetch("#/markets")
	// 	.then(res => {
	// 		return res.json();
	// 	})
	// 	.then(data => {
	// 		setMarket(data);
	// 	})
	// }, []);

	return <div className="container" />;
}
