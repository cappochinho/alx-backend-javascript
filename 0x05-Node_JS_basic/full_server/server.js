import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

app.use('/', (req, res, next) => {
  const databaseFilename = req.query.database || './database.csv';
  req.databaseFilename = databaseFilename;
  next();
});

app.use('/', routes);

app.listen(port, () => {});

export default app;
