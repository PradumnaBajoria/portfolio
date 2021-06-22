import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="app">
      <Topbar menu={menu} setMenu={setMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
