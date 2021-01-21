
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const ENV = process.env.NODE_ENV;
const TGBOT_TOKEN = process.env.TGBOT_TOKEN;
const MONGO_CONNECTION_STRING = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@kettularuuvipenkkidata.4hewi.mongodb.net/${process.env.NODE_ENV}?retryWrites=true&w=majority`;