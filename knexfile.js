module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bees',
    migrations: {
      directory: './src/api/db/migrations'
    },
    seeds: {
      directory: './src/api/db/seeds/development'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/bees_test',
    migrations: {
      directory: './src/api/db/migrations'
    },
    seeds: {
      directory: './src/api/db/seeds/test'
    },
    useNullAsDefault: true
  }
};