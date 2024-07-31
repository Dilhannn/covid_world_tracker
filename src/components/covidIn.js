import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CovidIn() {
  const { iso } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://covid-19-statistics.p.rapidapi.com/reports?iso=${iso}`, {
      headers: {
        "x-rapidapi-key": "48fd0a9458mshec0ec2919e02a11p10cf0cjsn6d4c4f224d03",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      }
    }).then(result => {
      setData(result.data);
    });
  }, [iso]);

  return (
    <div>
      <h1>COVID-19 Statistics for {iso}</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CovidIn;
