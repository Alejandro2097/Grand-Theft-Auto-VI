import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react"
import { useMediaQuery } from "react-responsive";

const FirstVideo = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const marginValue = isMobile ? '-100vh' : '-150vh';
    const endValue = isMobile ? '+=150% top' : '+=200% top';

    gsap.set('.first-vd-wrapper', { marginTop: marginValue, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-vd-wrapper',
        start: 'top top',
        end: endValue,
        scrub: true,
        pin: true,
      }
    })

    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
    tl.to('.first-vd-wrapper', { opacity: 1, duration: 2, ease: 'power1.inOut' });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  }, [isMobile]);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
          className="first-vd"
          src={`${import.meta.env.BASE_URL}videos/output1.mp4`}
          onError={(e) => {
            console.error('FirstVideo failed to load:', e);
          }}
        />
      </div>
    </section>
  )
}

export default FirstVideo