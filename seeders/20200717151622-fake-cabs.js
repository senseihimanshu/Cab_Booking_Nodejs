const Cab = require('../src/models/Cab');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface
      .bulkInsert('cabs', [
        {
          cab_code: 'DL404404',
          driver_name: 'Bipin Bharti',
          created_at: new Date(),
          modified_at: new Date(),
        },
        {
          cab_code: 'DL696969',
          driver_name: 'Aniket Jha',
          created_at: new Date(),
          modified_at: new Date(),
        },
      ])
      .then(() => Cab.findAll())
      .then(cabs => {
        queryInterface.bulkInsert(
          'cab_locations',
          cabs.map(cab => ({
            cab_id: cab.id,
            created_at: new Date(),
            modified_at: new Date(),
          }))
        );
      }),

  down: async (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.bulkDelete('cabs', null, {}),
      queryInterface.bulkDelete('cab_locations', null, {}),
    ]),
};
