import React from 'react';
import '../css/regionTable.css';

function RegionTable({ region }) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return (
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
                            <tr>
                                <td>{region.confirmed}</td>
                                <td>{region.active}</td>
                                <td>{region.deaths}</td>
                                <td>{region.recovered}</td>
                                <td>{new Date(region.last_update).toLocaleString('en-US', options)}</td>
                                <td>{region.region.province}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RegionTable;
