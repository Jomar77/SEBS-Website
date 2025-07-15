import { Link } from 'react-router-dom';

export default function ServiceShowcaseCard({ 
  id, 
  title, 
  description, 
  colorClass
}) {
  return (
    <div className="card bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      {/* Color Block */}
      <div className={`h-64 ${colorClass} rounded-t-2xl`} />
      
      {/* Card Body */}
      <div className="card-body text-center p-8">
        <h3 className="card-title text-2xl font-bold text-base-content justify-center mb-4">
          {title}
        </h3>
        
        <p className="text-base-content opacity-80 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="card-actions justify-center">
          <Link 
            to="/book"
            className="btn btn-primary btn-lg uppercase tracking-wide font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}