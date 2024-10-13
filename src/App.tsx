import React, { useState, useEffect } from 'react';
import { Music, Globe, Filter } from 'lucide-react';
import VideoGrid from './components/VideoGrid';
import FilterBar from './components/FilterBar';
import { fetchVideos } from './api/youtube';
import { Video } from './types';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [genre, setGenre] = useState('hip-hop');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchVideos(genre, language, country);
        setVideos(fetchedVideos);
        setError(null);
      } catch (err) {
        console.error('Error loading videos:', err);
        setError('Failed to load videos. Please try again later.');
      }
    };
    loadVideos();
  }, [genre, language, country]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      <header className="bg-black bg-opacity-50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <Music className="mr-2" /> Global Beats
          </h1>
          <div className="flex items-center">
            <Globe className="mr-2" />
            <span className="text-xl">Hottest Music Videos</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <FilterBar
          genre={genre}
          setGenre={setGenre}
          language={language}
          setLanguage={setLanguage}
          country={country}
          setCountry={setCountry}
        />
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mt-4">
            {error}
          </div>
        )}
        <VideoGrid videos={videos} />
      </main>
    </div>
  );
}

export default App;