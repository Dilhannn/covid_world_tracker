import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/regionTable.css';
import axios from 'axios';
import RegionTable from './ragionTable';

function CovidIn() {
  const { iso } = useParams();
  const [data, setData] = useState(null);
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    axios.get(`https://covid-19-statistics.p.rapidapi.com/reports?iso=${iso}`, {
      headers: {
        "x-rapidapi-key": "48fd0a9458mshec0ec2919e02a11p10cf0cjsn6d4c4f224d03",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      }
    }).then(result => {
      setData(result.data);
      if (result.data && result.data.data && result.data.data.length > 0) {
        setCountryName(result.data.data[0].region.name || 'Unknown');
      }
    });
  }, [iso]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-white">
          <h1 className="mb-0">COVID-19 Statistics for {countryName}</h1>
        </div>
        <div className="card-body">
          {data ? (
            <div>
              <h5 className="card-title">Country Data</h5>
              {data.data.map((region, index) => (
                <RegionTable key={index} region={region} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CovidIn;
