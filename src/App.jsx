import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setisTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const width = window.innerWidth;
      if (scrollPos === 0) setisTopOfPage(true);
      if (scrollPos !== 0) setisTopOfPage(false);

      if (width > 960 && scrollPos < 600) {
        setSelectedPage("home");
      } else if (width > 1060 && scrollPos < 1300) {
        setSelectedPage("skills");
      } else if (width > 1060 && scrollPos < 2900) {
        setSelectedPage("projects");
      } else if (width > 1060 && scrollPos < 4600) {
        setSelectedPage("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue md:w-full md:max-width-[1300px]">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
