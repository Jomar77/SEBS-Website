import WavePattern from '../Common/WavePattern';
import { Link } from 'react-router-dom';

export default function RecentEvent() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-pink-50">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 z-0">
        <WavePattern />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Event Title */}
        <h1 className="text-6xl font-bold text-gray-800 mb-12 text-center">
          Event #2
        </h1>
        
        {/* Colored Squares Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pink Square */}
          <div className="w-64 h-64 bg-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"></div>
          
          {/* Teal Square */}
          <div className="w-64 h-64 bg-teal-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"></div>
          
          {/* Orange Square */}
          <div className="w-64 h-64 bg-orange-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"></div>
          
          {/* Red-Orange Square */}
          <div className="w-64 h-64 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"></div>
        </div>
        
        {/* Look Button */}
        <Link to="/gallery">
          <button className="btn btn-lg bg-pink-400 hover:bg-pink-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none">
            Look!
          </button>
        </Link>
      </div>
    </div>
  );
}