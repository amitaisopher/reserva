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
            description: "כל יום חמישי מתניעים את הטאבון ומצפים להפתעות...",
            startTime: new Date('2023-06-22T16:00:00.000Z'),
            endTime: new Date('2023-06-22T20:59:59.000Z'),
            location: "עין השלושה",
            paymentMethods: [
               {type: PaymentType.CASH}
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
               {type: PaymentType.CASH}
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
               {type: PaymentType.CASH}
            ]
        },
    ]
  return <>
    <div className='p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {dummyEvents.map(event => {return <EventCard {...event} key={event.id}/>})}
    </div>
  </>
}

export default EventCards
