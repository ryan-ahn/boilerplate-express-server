import express from 'express';
import config from './config';
import connectDB from './loaders/db';
import routes from './routes';
import cors, { CorsOptions } from 'cors';

// Connect MongoDB
connectDB();

// Cors
const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: any) => {
    if (origin === undefined || origin === config.originHost) {
      callback(null, true);
    } else {
      callback(new Error('F900002'));
    }
  },
  credentials: true,
};

// Use Express
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app
  .listen(config.port, () => {
    console.log(`
    ################################################
            🛡️  Server listening on ${process.env.PORT} 🛡️
    ################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
app.get('/', (_, res) => {
  res.send('server clear');
});
