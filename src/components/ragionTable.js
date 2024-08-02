import React from 'react';
import '../css/regionTable.css';

function RegionTable({ region }) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <tr>
            <td>{region.confirmed}</td>
            <td>{region.active}</td>
            <td>{region.deaths}</td>
            <td>{region.recovered}</td>
            <td>{new Date(region.last_update).toLocaleString('en-US', options)}</td>
            <td>{region.region.province}</td>
        </tr>
    );
}

export default RegionTable;
