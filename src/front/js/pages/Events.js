import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Event = () => {
	const { store, actions } = useContext(Context);
	console.log(store.events);
	return (
		<div className="container">
			{store.events.length > 0 ? (
				store.events.map((item, position) => {
					return (
						<div className=" row my-5 border shadow rounded bg-light" key={position}>
							<div className="col-3">
								<img
									className="w-100 img-fluid"
									style={{ height: "100%", objectFit: "cover" }}
									src={item.screenshot}
								/>
							</div>

							<div className="col-9 p-3">
								<h2>{item.name}</h2>
								<p>{item.date}</p>
								<p>{item.description}</p>
								<a className="mx-auto" href={item.website}>
									<button type="button" className="btn btn-info w-25 ">
										Read Article
									</button>
								</a>
								{/* <span>
									{item.start_date}
									{item.end_date}
								</span> */}
							</div>
						</div>
					);
				})
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};
