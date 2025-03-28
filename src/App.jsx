import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Project } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {/* sections will be displayed in a slow way after the LoadingScreen is done */}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
