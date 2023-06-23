import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri: string = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
  } catch(error: any) {
    const e: Error = new Error(error);
    logger.error({type: "Error",stack: e.stack},"Failed connect to Database");
    process.exit(1);
  } finally {
    logger.info("Success connect to Database");
  }
}

export default connect;