import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './sections/Hero';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <nav>
        <img src="images/nav-logo.svg" className='scale-90'/>
        <img src="images/menu.svg" className='w-10'/>
      </nav>
      <Hero/>
    </main>
  )
}

export default App