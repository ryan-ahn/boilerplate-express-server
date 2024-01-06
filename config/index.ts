import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const apiHost = process.env.API_HOST;
const originHost = process.env.ORIGIN_HOST;
const mongoURI = process.env.MONGODB_URL as string;
const jwtSecretKey = process.env.JWT_SECRET_KEY as string;
const awsAccessKey = process.env.AWS_ACCESS_KEY as string;
const awsSecretKey = process.env.AWS_SECRET_KEY as string;
const cryptoKey = process.env.CRYPTO_SECRET_KEY as string;

export default {
  port,
  apiHost,
  mongoURI,
  originHost,
  jwtSecretKey,
  awsAccessKey,
  awsSecretKey,
  cryptoKey,
};
