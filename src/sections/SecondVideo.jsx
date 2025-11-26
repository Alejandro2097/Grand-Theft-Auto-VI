import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const SecondVideo = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const marginValue = isMobile ? '-40vh' : '-60vh';
    gsap.set('.lucia', { marginTop: marginValue, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true
      }
    })

    tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<')
    }
  }, [isMobile])

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src={`${import.meta.env.BASE_URL}videos/output2.mp4`}
          className="size-full object-cover second-vd"
          style={{
            objectPosition: isMobile ? 'center center' : '15% 0%'
          }}
        />
      </div>
    </section>
  )
}

export default SecondVideo