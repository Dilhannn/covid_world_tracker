import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/regionTable.css';
import axios from 'axios';
import RegionTable from './ragionTable';

function CovidIn() {
  const { iso } = useParams();
  const [data, setData] = useState(null);
  const [countryName, setCountryName] = useState('');
  const countryData = useSelector((state) => state.data.countryData);

  useEffect(() => {
    setData(countryData);
    if (countryData && countryData.data && countryData.data.length > 0) {
      setCountryName(countryData.data[0].region.name || 'Unknown');
    } else {
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
    }

  }, [countryData,iso]);

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
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Confirmed</th>
                          <th scope="col">Active</th>
                          <th scope="col">Deaths</th>
                          <th scope="col">Recovered</th>
                          <th scope="col">Last Update</th>
                          <th scope="col">Province</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.data.map((region, index) => (
                          <RegionTable key={index} region={region} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

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
