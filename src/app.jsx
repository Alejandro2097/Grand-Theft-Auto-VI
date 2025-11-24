import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import FirstVideo from './sections/FirstVideo';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>

      <FirstVideo />
    </main>
  )
}

export default App