import express from 'express';
const app = express();
import urlsRouter from './src/routes/url.js';
import indexRouter from './src/routes/index.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
// import cors from 'cors';

dotenv.config();

const PORT = 3333;

connectDB().then(() => console.log('Database Connected')).catch((err) => console.log(err));

// const allowedOrigin = process.env.BASE;
//
// const corsOptions = {
//     origin: allowedOrigin,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };
//
// app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});