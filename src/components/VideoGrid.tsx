import React from 'react';
import { Video } from '../types';

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {videos.map((video) => (
        <div key={video.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 truncate">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;