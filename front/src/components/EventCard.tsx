import { FC } from "react";
import { Event } from "@/types/event";
import { MapPinIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const EventCard: FC<Event> = ({location, name, startTime, endTime, description, id}) => {
  startTime = startTime instanceof Date ? startTime : new Date(startTime)  
  endTime = endTime instanceof Date ? endTime : new Date(endTime)  
  const navigate = useNavigate()
    function showMoreButtonHandler(e, eventId: string) {
        navigate(`/event/${eventId}`)
    }
    return (
    <div className="w-full mx-auto min-w-[360px] max-w-[450px] bg-black/20 hover:bg-black/40 text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
      {/* card top */}
      <div className="my-5 flex flex-col gap-10">
        <div className="flex justify-center">
          <div className="text-[32px] leading-none font-light">{name}</div>
          <div className="text-4xl"></div>
        </div>

        <div className="capitalize text-center">{description}</div>
      </div>
      {/* card body */}
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center">
            <MapPinIcon />
            <div className="font-semibold text-2xl">{location}</div>
          </div>

          <div>
            <div className="flex items-center gap-6 justify-between">
              <div>Starting:</div>
              <div>
                {startTime.getDate()}/{startTime.getMonth() + 1}/
                {startTime.getFullYear()} {startTime.toLocaleTimeString()}
              </div>
            </div>
            <div className="flex items-center gap-6 justify-between">
              <div>Wrapping up:</div>
              <div>
                {endTime.getDate()}/{endTime.getMonth() + 1}/
                {endTime.getFullYear()} {endTime.toLocaleTimeString()}
              </div>
            </div>         
          </div>
          <div className="flex justify-center">
                <button onClick={(e) => showMoreButtonHandler(e, id)} className="rounded-full bg-blue-500 hover:bg-blue-700 py-3 px-5">Show more</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
