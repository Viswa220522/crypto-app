// src/CryptoCard.js
import React from 'react';

function CryptoCard({ coin }) {
  return (
    <div className="card shadow">
      <img src={coin.image} alt={coin.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{coin.name}</h5>
        <p className="card-text">{coin.symbol}</p>
        <p className="card-text">${coin.current_price}</p>
        <p className="card-text">${coin.total_volume.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CryptoCard;
