import { useState } from "react";
import NavBar from "@/components/NavBar";
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import { NotFound } from "./components/NotFound";
import EventCards from "./components/EventCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-[Poppins, Arimo] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/events" element={<EventCards events={[]}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
