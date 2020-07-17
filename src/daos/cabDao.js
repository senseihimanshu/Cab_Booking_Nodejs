const CabLocations = require('../models/CabLocation');
const distance = require('../../utils/distance');

class CabDao {
  getAllCabs = async sourceLocation => {
    const { sourceLatitude, sourceLongitude } = sourceLocation;

    const cabs = [];

    await CabLocations.findAll({ raw: true }).then(cabLocations => {
      cabLocations.map(
        cabLocation =>
          distance(
            cabLocation.cabLatitude,
            cabLocation.cabLongitude,
            sourceLatitude,
            sourceLongitude
          ) && cabs.push(cabLocation)
      );
    });

    return cabs;
  };
}

module.exports = new CabDao();
