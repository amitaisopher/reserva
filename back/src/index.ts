import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import apiV1Router from '@/api/v1';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import compression from 'compression';
import http from 'node:http';
import { Server, Socket } from 'socket.io';

dotenv.config()

const corsConfig: cors.CorsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    exposedHeaders: ["Authorization, Email"],

}
const app: Express = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: corsConfig
})

io.on('connection', (socket: Socket) => {
    console.log('new Websocket connection.')
    // Listening for event from client representing the creation of a new event/reservattion
    socket.on('EventAdded', () => {
        // Sending a message to all sockets (including the one who created the reservation)
        io.emit('eventsUpdated')
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
})

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10
})

app.use(limiter)
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsConfig))
app.use(cookieParser(process.env.COOKIE_SIGNNING_KEY))
app.use('/api/v1', apiV1Router)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World From the Typescript Server!')
});

const port = process.env.EXPRESS_APP_PORT || 8000

httpServer.listen(port, () => {
    console.log(`Reserva server is running on port ${port}`)
})

