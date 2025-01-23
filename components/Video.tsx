'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-[800px] aspect-video flex items-center justify-center bg-black">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/61C76aUw8zk?autoplay=1&mute=0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://img.youtube.com/vi/61C76aUw8zk/maxresdefault.jpg')`,
            }}
          ></div>
          <button
            onClick={handlePlay}
            className="relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-white rounded-full group animate-pulse"
          >
            <Play className="h-8 w-8 md:h-12 md:w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 w-full h-full animate-ping rounded-full bg-primary opacity-20"></div>
          </button>
        </>
      )}
    </div>
  );
};

export default Video;
