import express, { Response, Request } from "express";
import { errorHandlerMiddleware } from "@/middleware/errorHandling";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()
router.use(errorHandlerMiddleware)
router.use(express.json())
router.route('/').get((req: Request, res: Response) => {
    res.send('hello from API V1')
})

const data = [{
    id: "99hd9ah9weje2qj9j",
    name: "ערב פיצות משוגעות",
    description: "כל יום חמישי מתניעים את הטאבון ומצפים להפתעות...",
    startTime: new Date('2023-06-22T16:00:00.000Z'),
    endTime: new Date('2023-06-22T20:59:59.000Z'),
    location: "עין השלושה",
    paymentMethods: [
        { type: "cash" }
    ]
},
{
    id: "kjjsada7937",
    name: "ערב פיצות משוגעות",
    description: "כל יום חמישי מתניעים את הטאבון ומצפים להפתעות...",
    startTime: new Date('2023-06-22T16:00:00.000Z'),
    endTime: new Date('2023-06-22T20:59:59.000Z'),
    location: "עין השלושה",
    paymentMethods: [
        { type: "cash" }
    ]
},
{
    id: "05jt43nn3iuhs",
    name: "ערב פיצות משוגעות",
    description: "כל יום חמישי מתניעים את הטאבון ומצפים להפתעות...",
    startTime: new Date('2023-06-22T16:00:00.000Z'),
    endTime: new Date('2023-06-22T20:59:59.000Z'),
    location: "עין השלושה",
    paymentMethods: [
        { type: "cash" }
    ]
}]

router.route('/events').get((req: Request, res: Response) => {
    res.send(data)
})

router.route('/event').post((req: Request, res: Response) => {
    const event = req.body
    data.push({ ...event, id: uuidv4() })
    res.send()
})

router.route('/event/:eventId')
    .get((req: Request, res: Response) => {
        const { eventId } = req.params
        const event = data.find(item => item.id === eventId)
        if (event) {
            res.send(event)
        } else {
            res.status(404).send()
        }
    })
    .put((req: Request, res: Response) => {
        const { eventId } = req.params
        const updatedEvent = req.body
        const index = data.findIndex(item => item.id === eventId)
        if (index == -1) {
            res.status(404).send()
        } else {
            data[index] = updatedEvent
            res.send()
        }
    }
    )

export default router