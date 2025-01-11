import express from 'express';
const app = express();
import urlsRouter from './src/routes/url.js';
import indexRouter from './src/routes/index.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3333;

connectDB().then(() => console.log('Database Connected')).catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});