import axios from 'axios';
import { Video } from '../types';

const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual YouTube API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideos = async (genre: string, language: string, country: string): Promise<Video[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        q: `${genre} music video ${language} ${country}`.trim(),
        type: 'video',
        maxResults: 15,
        key: API_KEY,
        videoCategoryId: '10', // Music category
        regionCode: country || undefined,
        relevanceLanguage: language || undefined,
      },
    });

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};