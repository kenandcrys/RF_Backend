// DO NOT CHANGE THIS FILE
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/Feed.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
  production: {
    client: 'postgres', // Changed from 'postgres' to 'pg'
    connection: {
      host: 'dpg-cscja8o8fa8c7382mei0-a',
      port: 5432,
      database: 'rf_feeds',
      user: 'redneck_user',
      password: 'hy27mEaqr8Q2TdxeLNK7noZbFOk5tfIW',
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './data/migrations', // Optional: specify migrations directory
    },
    seeds: {
      directory: './data/seeds', // Optional: specify seeds directory
    },
  },
};
