import React from "react";

export function AboutUs() {
	return (
		<div className="container">
			<div className="col-12">
				<p className="d-flex justify-content-center mt-5">
					<h1>
						<b>Josh Fishman</b>
					</h1>
				</p>
				<p>Bio</p>
				<p>
					<a href="https://github.com/Joshfishman97">
						<i className="fab fa-github-square fa-3x" />
					</a>
					<a href="https://www.linkedin.com/in/josh-fishman-972054214/">
						<i className="fab fa-linkedin fa-3x" />
					</a>
				</p>
				<p className="namestyle d-flex justify-content-center mt-5">
					<h1>
						<b>Stewart Green (GM DEEP)</b>
					</h1>
				</p>
				<p>
					Stewart Green is a full stack developer that is constantly learning and improving his skills to
					become a well balance developer. Currently, he has learned multiple languages including HTML, CSS,
					JavaScript, React, Python, Rest API, SQL. One of many goals, he has getting into the tech industry
					is to learn and develop bots for stocks, futures, crypto, and forex markets. After starting work as
					a junior developer and working on multiple projects over the next year. He plans on continuing his
					journey in the field of Artificial Intelligence to develop his trading bots to another level.
					Ideally, he would like to work within a company that will allow him to develop his skills and grow
					in the fast-growing field of AI.{" "}
				</p>
				<div className="d-flex justify-content-center">
					<a href="https://www.linkedin.com/in/stewartgreengmdeep/">
						<i className="fab fa-linkedin fa-3x p-2" />
					</a>
					<a href="https://github.com/GMDEEP">
						<i className="fab fa-github-square fa-3x p-2" />
					</a>
					<a href="https://twitter.com/GMDeep_onGithub">
						<i className="fab fa-twitter-square fa-3x p-2" />
					</a>
					<a href="https://www.hackerrank.com/stewartjgreen">
						<i className="fab fa-hackerrank fa-3x p-2" />
					</a>
				</div>
			</div>
		</div>
	);
}
