import { useState } from "react";
import NavBar from "@/components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <NavBar/>
    </div>
  );
}

export default App;
