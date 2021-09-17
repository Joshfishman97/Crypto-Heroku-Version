import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block carouselImg"
					src="https://res.cloudinary.com/djwr65ikt/image/upload/v1631900911/crypto_rwy8sr.jpg"
					alt="First slide"
				/>
				<Link to="coinpage">
					<Carousel.Caption>
						<h5>Top 10 CryptoCoins</h5>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block carouselImg"
					src="https://res.cloudinary.com/djwr65ikt/image/upload/v1631231402/image_nfut09.jpg"
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
					src="https://res.cloudinary.com/djwr65ikt/image/upload/v1631231411/cryptoLP_banner_3_jpg_hdg5tf.jpg"
					alt="Third slide"
				/>
				<Link to="/articles">
					<Carousel.Caption>
						<h5>Research the Market Activity</h5>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	);
};
