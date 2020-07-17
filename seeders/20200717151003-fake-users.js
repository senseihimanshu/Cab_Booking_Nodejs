module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [
      {
        first_name: 'Himanshu',
        last_name: 'Sharma',
        email: 'senseihimanshu@gmail.com',
        created_at: new Date(),
        modified_at: new Date(),
      },
      {
        first_name: 'Ashu',
        last_name: 'Ghildiyal',
        email: 'ashughildiyal@gmail.com',
        created_at: new Date(),
        modified_at: new Date(),
      },
      {
        first_name: 'Alok',
        last_name: 'Singh',
        email: 'aloksingh@gmail.com',
        created_at: new Date(),
        modified_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {}),
};
