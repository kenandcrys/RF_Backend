const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    client: 'sqlite3',
    connection: { filename: './data/Feed.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
  production: {
    // Use Sequelize in production for Postgres, Knex is not required for queries
    useSequelize: true, // Custom flag to indicate Sequelize is used in production
    // Migrations and Seeds directories can still be managed by Knex in production
    migrations: {
      directory: './data/migrations', // Knex can still manage migrations
    },
    seeds: {
      directory: './data/seeds', // Knex can still manage seeds
    },
  },
};
