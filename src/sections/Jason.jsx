import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"

const Jason = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const marginValue = isMobile ? '-50vh' : '-80vh';
    const yValue = isMobile ? -150 : -300;

    gsap.set('.jason', { marginTop: marginValue });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: yValue, duration: 1, ease: 'power1.inOut'
    }, '<')
  }, [isMobile]) 

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p>

        <div className="jason-2">
          <img src={`${import.meta.env.BASE_URL}images/jason-2.webp`} />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src={`${import.meta.env.BASE_URL}images/jason-1.webp`} />
        </div>
        <div className="jason-3">
          <img src={`${import.meta.env.BASE_URL}images/jason-3.webp`} />
        </div>
      </div>
    </section>
  )
}

export default Jason