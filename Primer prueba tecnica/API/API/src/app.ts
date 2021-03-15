import express from 'express';
import morgan from 'morgan';
import indexRoutes from './Routes/index';
import cors from 'cors';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api', indexRoutes);


export default app;