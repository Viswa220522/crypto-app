// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-4">Crypto Prices</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="form-control mb-4"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="row">
        {filteredCoins.map(coin => (
          <div className="col-md-3 mb-4" key={coin.id}>
            <CryptoCard coin={coin} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
