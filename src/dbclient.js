const { Pool } = require('pg');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const pool = new Pool({
    port: 5432,
});

module.exports = pool;



