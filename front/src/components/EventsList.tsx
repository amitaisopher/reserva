import { FC, useEffect, useState } from 'react'
import type { Event } from '@/types/event'
import EventCard from '@/components/EventCard'
import { getEventsList } from '@/lib/api'


type EventsProps = {
  events: Event[]
}

const EventCards: FC<EventsProps> = () => {
  const [eventsData, setEventsData] = useState<Event[]>([])
  useEffect(() => {
    (async () => {
      const events = await getEventsList()
      setEventsData(events)
    })()
  }, [])
  return <>
    <div className='p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {eventsData.map(event => {return <EventCard {...event} key={event.id}/>})}
    </div>
  </>
}

export default EventCards
