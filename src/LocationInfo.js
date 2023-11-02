import React from 'react';

function LocationInfo({ data }) {
  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p><strong>Country:</strong> {data['country']}</p>
      <p><strong>Country Abbreviation:</strong> {data['country abbreviation']}</p>

      <h3>Places:</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Place Name</th>
            <th>State</th>
            <th>State Abbreviation</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {data['places'].map((place, index) => (
            <tr key={index}>
              <td>{place['place name']}</td>
              <td>{place['state']}</td>
              <td>{place['state abbreviation']}</td>
              <td>{place['longitude']}</td>
              <td>{place['latitude']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationInfo;
