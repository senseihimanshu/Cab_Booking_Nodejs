const cabModel = require('../src/daos/cabDao');

class Cab {
  getNearbyCabs = async (req, res) => {
    try {
      const cabs = await cabModel.getAllCabs({
        sourceLatitude: req.query.sourceLatitude,
        sourceLongitude: req.query.sourceLongitude,
      });

      res.send({
        success: true,
        payload: {
          data: cabs,
          message: 'Nearby Cabs has been retrieved successfully',
        },
      });
    } catch (e) {
      res.send({
        success: false,
        payload: {
          message: 'Something went wrong, Please try again after some time',
        },
      });
    }
  };
}

module.exports = new Cab();
