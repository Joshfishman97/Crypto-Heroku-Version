import React, { useEffect, useState } from "react";

export function VideoPage() {
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

	return (
		<div className="container">
			<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
				<div className="ratio ratio-16x9">
					<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" />
				</div>
			</div>
		</div>
	);
}
