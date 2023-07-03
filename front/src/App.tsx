import NavBar from "@/components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "@/components/NotFound";
import EventsPage from "@/components/EventsPage";
import { Toaster } from "./components/Toaster";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { SocketIoContext, socket } from "@/lib/socket";


function App() {
  
  return (
    <SocketIoContext.Provider value={socket}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="font-[Poppins, Arimo] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] absolute inset-0 h-screen overflow-scroll">
          <NavBar />
          <Router>
            <Routes>
              <Route path="/events" element={<EventsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
        </div>
      </LocalizationProvider>
    // </SocketIoContext.Provider>
  );
}

export default App;
