import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	<Carousel fade>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434385/368503_oz3s3i.jpg"
				alt="First slide"
			/>
			<Link to="/markets">
				<Carousel.Caption>
					<h5>Top 10 CryptoCoins</h5>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434753/star-wars-star-wars-the-fallen-order-planet-digital-art-artwork-hd-wallpaper-preview_poejdb.jpg"
				alt="Second slide"
			/>
			<Link to="/videos">
				<Carousel.Caption>
					<h5>Crypto Video Library</h5>
					<p>Learn how to trade crypto or learn about what crypto is in our video library</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434944/ea1097a6ee800831b32c0e94ab9e6818_hywrnq.jpg"
				alt="Third slide"
			/>
			<Link to="/research">
				<Carousel.Caption>
					<h5>Research the Market Activity</h5>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
	</Carousel>;
};
