import { FC, useEffect, useState, createContext, useContext } from 'react'
import EventsList from '@/components/EventsList'
import { EventDialog } from '@/components/EventDialog'
import { createEvent, getEventsList } from '@/lib/api'
import type { Event } from '@/types/event'
import { SocketIoContext } from '@/lib/socket'
import { Button } from '@/components/Button'


export const eventListContext = createContext(null)

const EventsPage: FC = () => {
  const [eventsData, setEventsData] = useState<Event[]>([])
  const socket = useContext(SocketIoContext)
  const updateEventList = async () => {
    const events = await getEventsList()
    setEventsData(events)
  }
  const onEventsUpdated = async() => {
    updateEventList()
  }
  useEffect(() => {
    updateEventList()
    socket.on('eventsUpdated', onEventsUpdated)
    return () => {
      socket.off('eventsUpdated', onEventsUpdated)
    }
  }, [])
  return <div>
    <eventListContext.Provider value={{updateEventList}}>
      <EventDialog submitHandlerFunction={createEvent} dialogTitle='New Item' dialogDescription='Add new item to inventory'>
        <Button variant={"default"}>Add item</Button>
      </EventDialog>
      <EventsList events={eventsData}/>
    </eventListContext.Provider>
  </div>
}

export default EventsPage