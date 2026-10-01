import { useEffect, useRef, useState } from 'react';

interface HeroLogoVideoProps {
  className?: string;
}

export default function HeroLogoVideo({ className = '' }: HeroLogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoUrl =
    'https://res.cloudinary.com/xymtdshn/video/upload/v1790802918/transici%C3%B3n_de_logo_20260930181146.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure loop is false so it freezes at the final frame naturally
    video.loop = false;

    // Handle end of video: pause firmly on the last frame
    const handleEnded = () => {
      if (video) {
        video.pause();
        // Keep at the very last frame
        if (video.duration) {
          video.currentTime = video.duration - 0.05;
        }
      }
    };

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
      // Attempt autoplay muted (compliant with browser autoplay policies)
      video.play().catch((err) => {
        console.warn('Autoplay prevented or deferred:', err);
      });
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      aria-label="Logo de TubeMonetize Masterclass"
    >
      {/* Ambient glow behind logo tailored for logo size */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-48 h-24 sm:w-64 sm:h-32 bg-red-600/20 rounded-full blur-2xl transform -translate-y-1 opacity-70" />
      </div>

      {/* Video Container - Compact logo sizing, seamlessly integrated into #1c1c1c */}
      <div
        className="relative w-44 sm:w-56 md:w-64 max-w-[260px] aspect-video overflow-hidden flex items-center justify-center pointer-events-none bg-[#1c1c1c]"
        style={{
          backgroundColor: '#1c1c1c',
          maskImage:
            'radial-gradient(ellipse 96% 92% at 50% 50%, black 80%, rgba(0,0,0,0.85) 92%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 96% 92% at 50% 50%, black 80%, rgba(0,0,0,0.85) 92%, transparent 100%)',
        }}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none select-none transition-opacity duration-300 bg-[#1c1c1c]"
        />

        {/* Loading subtle placeholder before video data arrives */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1c1c1c]">
            <div className="w-6 h-6 rounded-full border-2 border-red-600/40 border-t-red-500 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
