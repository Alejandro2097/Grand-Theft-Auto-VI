import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  })

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src={`${import.meta.env.BASE_URL}images/overlay.webp`} />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}videos/postcard-vd.mp4`}
          onError={(e) => {
            console.error('Video failed to load:', e);
            e.target.style.display = 'none';
          }}
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  )
}

export default PostCard