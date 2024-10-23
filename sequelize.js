// sequelize.js (Separate file)
const { Sequelize } = require('sequelize-cockroachdb');

const sequelize = new Sequelize(process.env.DATABASE_URL);

(async () => {
  try {
    const [results, metadata] = await sequelize.query('SELECT NOW()');
    console.log(results);
  } catch (err) {
    console.error('Error executing query:', err);
  } finally {
    await sequelize.close();
  }
})();
