import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "./shared/types"
import Home from "./scenes/navbar/home";
import Benefits from "./scenes/navbar/benefits";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage((SelectedPage.Home))
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={selectedPage}/>
        <Benefits setSelectedPage={selectedPage}/>
      </div>
     
    </>
  )
}

export default App
