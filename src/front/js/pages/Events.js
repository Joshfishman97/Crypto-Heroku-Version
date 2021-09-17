import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Event = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.news.map((item, position) => {
				return (
					<div className=" row my-5 border shadow rounded bg-light" key={position}>
						<div className="col-3">
							<img
								className="w-100 img-fluid"
								style={{ height: "100%", objectFit: "cover" }}
								src={item.proof_image_link}
							/>
						</div>

						<div className="col-9 p-3">
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<a className="mx-auto" href={item.link}>
								<button type="button" className="btn btn-info w-25 ">
									More Info
								</button>
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
