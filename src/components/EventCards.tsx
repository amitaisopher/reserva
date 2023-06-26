import { FC } from 'react'
import type { Event } from '@/types/event'
import { PaymentType } from '@/lib/payments'
import EventCard from '@/components/EventCard'


type EventsProps = {
  events: Event[]
}

const EventCards: FC<EventsProps> = ({events = {}}) => {
    const dummyEvents: Event[] = [
        {
            id: "99hd9ah9weje2qj9j",   
            name: "ערב פיצות משוגעות",
            description: "כל יום חמישים מתניעים את ה-Brick Oven ומצפים להפתעות...",
            startTime: new Date('2023-06-22T16:00:00.000Z'),
            endTime: new Date('2023-06-22T20:59:59.000Z'),
            location: "עין השלושה",
            paymentMethods: [
               {type: PaymentType.CASH}
            ]
        }
    ]
  return <>
    {dummyEvents.map(event => {return <EventCard {...event} key={event.id}/>})}
  </>
}

export default EventCards
