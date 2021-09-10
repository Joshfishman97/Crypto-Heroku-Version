import React, { useEffect, useState } from "react";

export function CoinPage() {
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/coin")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCoin(data);
            });
    }, []);

    return (
        <div className="d-flex flex-column">
            {coin ? coin.map((coin, i) => {
                return (
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Coin</th>
                                <th scope="col">Price</th>
                                <th scope="col">Daily Gain/Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td>{coin.namecoin}</td>
                                <td>{coin.price}</td>
                                <td>{coin.dailyvalue}</td>
                            </tr>
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td>{coin.namecoin}</td>
                                <td>{coin.price}</td>
                                <td>{coin.dailyvalue}</td>
                            </tr>
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td>{coin.namecoin}</td>
                                <td>{coin.price}</td>
                                <td>{coin.dailyvalue}</td>
                            </tr>
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td>{coin.namecoin}</td>
                                <td>{coin.price}</td>
                                <td>{coin.dailyvalue}</td>
                            </tr>
                            <tr>
                                <th scope="row">{coin.id}</th>
                                <td>{coin.namecoin}</td>
                                <td>{coin.price}</td>
                                <td>{coin.dailyvalue}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }) 
        </div>
    );
}
