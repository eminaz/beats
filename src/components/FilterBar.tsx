import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  genre: string;
  setGenre: (genre: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  country: string;
  setCountry: (country: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  genre,
  setGenre,
  language,
  setLanguage,
  country,
  setCountry,
}) => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md flex flex-wrap items-center gap-4">
      <div className="flex items-center">
        <Filter className="mr-2" />
        <span className="font-semibold">Filters:</span>
      </div>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="bg-purple-700 text-white rounded px-3 py-1"
      >
        <option value="hip-hop">Hip-Hop</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="electronic">Electronic</option>
      </select>
      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-purple-700 text-white rounded px-3 py-1 placeholder-purple-300"
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="bg-purple-700 text-white rounded px-3 py-1 placeholder-purple-300"
      />
    </div>
  );
};

export default FilterBar;