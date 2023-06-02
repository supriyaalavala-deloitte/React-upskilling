import React from 'react';
import cloudicon from './assets/clouds.png';
import './NoLocation.scss';

function NoLocation() {
  return (
    <div className="nolocation-container container">
      <div className="row justify-content-center">
        <div className="col-sm-4 img-container col-10">
          <img className="nolocation-img" src={cloudicon} alt="No Location Available" />
          <p className="nolocation-title">No locations added to watchlist</p>
        </div>
      </div>
    </div>
  )
}

export default NoLocation