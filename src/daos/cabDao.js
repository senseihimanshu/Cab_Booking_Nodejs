const CabLocations = require('../models/CabLocation');
const distance = require('../../utils/distance');

class CabDao {
  getAllCabs = async sourceLocation => {
    const { sourceLatitude, sourceLongitude } = sourceLocation;

    const cabs = [];

    CabLocations.findAll().then(
      cabLocation =>
        distance(
          cabLocation.cab_latititude,
          cabLocation.cab_longitude,
          sourceLatitude,
          sourceLongitude
        ) && cabs.push(cabLocation)
    );

    return cabs;
  };
}

module.exports = new CabDao();
