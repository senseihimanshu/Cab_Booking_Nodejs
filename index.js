const express = require('express');

const app = express();
const cors = require('cors');
const config = require('config');

// JWT Secret Key
if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: secretkey for JWT not set');
  console.info(
    'You can set secretkey using: "export secretkey <anything>"(For Terminal) and "set secretkey <anything>(For cmd)"'
  );
  process.exit(1);
}

// Using Middlewares
app.use(cors());
app.use(express.json());

// Listening and setting up of port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));

const sequelize = require('./src/database/connection');

// Authenticating DB Connection
try {
  sequelize.authenticate();
  console.log('DB Connection has been established successfully.');
} catch (e) {
  console.error('Unable to connect to the database:', e);
}

require('./src/bootstrap')();
require('./routes')(app);
