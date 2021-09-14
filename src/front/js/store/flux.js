const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			authToken: null,
			authError: null,
			news: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/newsfeed")
					.then(resp => resp.json())
					.then(data => setStore({ news: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			registerUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					mode: "cors",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 204) {
							throw new Error("register-error");
						}

						getActions().loginUser(email, password);
					})
					.catch(error => setStore({ authError: error, authToken: null }));
			},

			logout: () => setStore({ authToken: null }),

			loginUser: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					mode: "cors",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 200) {
							throw new Error("authentication-error");
						}

						return resp.json();
					})
					.then(data => setStore({ authToken: data.token, authError: null }))
					.catch(error => setStore({ authToken: null, authError: error }));
			},
			eventFeed: () => {
				fetch("https://coinpaprika1.p.rapidapi.com/coins/btc-bitcoin/events", {
					method: "GET",
					headers: {
						"x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
						"x-rapidapi-key": "323d9d599bmsh8b4bb4bc83add3cp1fb002jsn2ba4ee4ff602"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(response => {
						setStore({ news: response });
					})
					.catch(err => {
						console.error(err);
					});
			},
			articleFeed: () => {
				fetch("https://coinpaprika1.p.rapidapi.com/coins/btc-bitcoin/events", {
					method: "GET",
					headers: {
						"x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
						"x-rapidapi-key": "323d9d599bmsh8b4bb4bc83add3cp1fb002jsn2ba4ee4ff602"
					}
				})
					.then(response => {
						console.log(response);
					})
					.catch(err => {
						console.error(err);
					});
			}
		}
	};
};

export default getState;
