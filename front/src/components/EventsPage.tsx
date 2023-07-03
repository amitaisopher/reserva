import { FC, useEffect, useState, createContext, useContext } from 'react'
import EventsList from '@/components/EventsList'
import { AddEventDialog } from '@/components/AddEventDialog'
import { getEventsList } from '@/lib/api'
import type { Event } from '@/types/event'
import { SocketIoContext } from '@/lib/socket'


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
      <AddEventDialog/>
      <EventsList events={eventsData}/>
    </eventListContext.Provider>
  </div>
}

export default EventsPage