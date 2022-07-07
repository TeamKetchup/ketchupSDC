const { Pool } = require("pg")

const pool = new Pool({
    // Format: postgres://user:password@host:5432/database
    connectionString: process.env.DATABASE_URL,
  });

if(process.env.NODE_ENV === 'production') {
    pool.ssl = {rejectUnauthorized: false}
}
  
  
  module.exports = pool;