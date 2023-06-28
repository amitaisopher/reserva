import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import apiV1Router from '@/api/v1';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

dotenv.config()

const corsConfig: cors.CorsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    exposedHeaders: ["Authorization, Email"],

}
const app: Express = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsConfig))
app.use(cookieParser(process.env.COOKIE_SIGNNING_KEY))
app.use('/api/v1', apiV1Router)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World From the Typescript Server!')
});

const port = process.env.EXPRESS_APP_PORT || 8000

app.listen(port, () => {
    console.log(`Reserva server is running on port ${port}`)
})

