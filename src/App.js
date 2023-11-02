import React, { useState } from 'react';
import './App.css';
import LocationInfo from './LocationInfo.js';

function App() {
  const [postalCode, setPostalCode] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        throw new Error('Invalid postal code');
      }
      const data = await response.json();
      setLocationData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearLocationInfo = () => {
    setLocationData(null);
    setPostalCode('');
    setError(null);
  };

  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button onClick={fetchLocationInfo}>Get Location Info</button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {locationData && <LocationInfo data={locationData} />}
      <button onClick={clearLocationInfo}>Clear Info</button>
    </div>
  );
}

export default App;
