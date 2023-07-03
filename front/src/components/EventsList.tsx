import { FC } from 'react'
import type { Event } from '@/types/event'
import EventCard from '@/components/EventCard'

interface EventsListProps {
  events: Event[]
}

const EventsList: FC<EventsListProps> = ({events}) => {
  return <>   
      <div className='p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {events.map(event => {return <EventCard {...event} key={event.id}/>})}
      </div>
  </>
}

export default EventsList