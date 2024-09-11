import { useState, useEffect } from 'react';
import { urlForVideo } from '@/utils/sanity';

export default function VideoBlock({ value }) {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const url = await urlForVideo(value);
      setVideoUrl(url);
    };

    fetchVideoUrl();
  }, [value]);

  return (
    <div className="relative w-full h-96 mx-auto">
      {videoUrl ? (
        <video className="object-contain w-full h-full" controls controlsList="nodownload">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};