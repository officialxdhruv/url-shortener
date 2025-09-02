import express from 'express';
import urlRoute from './routes/url.js';
import userRoute from './routes/user.js';
import connectToMongoDB from './connect.js';
import staticRouter from './routes/staticRouter.js';
import cookieParser from 'cookie-parser';
import { checkAuth, loginUserOnly } from './middleware.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('MongoDB is connected.'));

// View Engine
app.set("view engine", "ejs");
app.set("views", './views');

// Routes
app.use('/url', loginUserOnly, urlRoute);
app.use('/user', userRoute);
app.use('/', checkAuth, staticRouter);

app.listen(port, () => console.log(`Server Started at ${port}`));