const { Pool } = require("pg")

const pool = new Pool({
    // Format: postgres://user:password@host:5432/database
    // ssl:{
    //   rejectUnauthorized: false
    // },
    connectionString: process.env.DATABASE_URL,
  });
  
  
  module.exports = pool;