module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bees',
    migrations: {
      directory: './src/API/db/migrations'
    },
    seeds: {
      directory: './src/API/db/seeds/development'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/bees_test',
    migrations: {
      directory: './src/API/db/migrations'
    },
    seeds: {
      directory: './src/API/db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './src/API/db/migrations'
    },
    useNullAsDefault: true
  }
};