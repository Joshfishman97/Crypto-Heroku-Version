import React, { useEffect, useState } from "react";

export function Research() {
	const [market, setMarket] = useState([]);
	const RSS_URL = `https://theconversation.com/us/topics/cryptocurrency-8321/articles.atom`;

	useEffect(() => {
		fetch(RSS_URL)
			.then(res => {
				return res.text();
			})
			.then(data => {
				setMarket(data);
			});
	}, []);

}
