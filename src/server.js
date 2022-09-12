import app from './app';
import logger from './config/logger';

const PORT = 5000;

app.listen(PORT, () => {
  logger.info(`Serve is running at Port ${PORT}`);
  logger.info(`CTRL + click in (http://localhost:${PORT})`);
});
