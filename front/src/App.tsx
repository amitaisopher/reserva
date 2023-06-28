import { useState } from "react";
import NavBar from "@/components/NavBar";
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import { NotFound } from "@/components/NotFound";
import EventCards from "@/components/EventsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-[Poppins, Arimo] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] absolute inset-0 h-screen overflow-scroll">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/events" element={<EventCards events={[]}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
