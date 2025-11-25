import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon"

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canClick, setCanClick] = useState(true);

  console.log('Hero render - isModalOpen:', isModalOpen, 'canClick:', canClick);

  useEffect(() => {
    console.log('Modal state changed:', isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setCanClick(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
        onUpdate: (self) => {
          if (self.progress > 0.1) {
            setCanClick(false);
          }
        }
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to('.overlay-logo', { opacity: 1, onComplete: () => {
        gsap.to('.overlay-logo', { opacity: 0 });
      } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<')
  });

  return (
    <>
      <section className="hero-section">
        <div className="size-full mask-wrapper">
          <img src="/images/hero-bg.webp" alt="background" className="scale-out" />
          <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
          <img  src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
        </div>

        <div
          className="play-img"
          onClick={() => {
            console.log('CLICK DETECTED! canClick:', canClick);
            if (!canClick) {
              console.log('Click blocked - canClick is false');
              return;
            }
            console.log('Opening modal...');
            setIsModalOpen(true);
          }}
          style={{
            cursor: 'pointer',
            zIndex: 200,
            position: 'absolute',
            pointerEvents: 'auto',
            opacity: canClick ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <img src="/images/play.png" alt="play" className="w-7 ml-1" style={{ pointerEvents: 'none' }} />
        </div>

        <div>
          <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
        </div>

        <div className="fake-logo-wrapper">
          <img src="/images/big-hero-text.svg" className="overlay-logo" />
        </div>

        <ComingSoon />
      </section>

      {isModalOpen && createPortal(
        <div
          className="video-modal-overlay"
          onClick={() => {
            console.log('Closing modal from overlay');
            setIsModalOpen(false);
          }}
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => {
                console.log('Closing modal from button');
                setIsModalOpen(false);
              }}
            >
              ✕
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VQRLujxTm3c?autoplay=1"
                title="GTA VI Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Hero