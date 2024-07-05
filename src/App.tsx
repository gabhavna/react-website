// import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Navbar from './components/pages/Navbar'
import HeroSection from './components/pages/HeroSection'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
// import Todolist from "./components/Todolist"
const App = () => {
  
  return (
    // <div>
    //   To List
    //   <Button>Click me</Button>
    // </div>
    // <>
    // <Todolist />
    // </>
    <div className="app">
      <Router>
        <Navbar />
        <HeroSection />
      </Router>
    
    </div>
  );
};

export default App;
