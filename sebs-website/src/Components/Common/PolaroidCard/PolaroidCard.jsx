export default function PolaroidCard({ 
  title, 
  description, 
  color, 
  className = "",
  size = "default" 
}) {
  const sizeClasses = {
    small: "h-48",
    default: "h-64",
    large: "h-80"
  };

  return (
    <div className={`card w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 ${className}`}>
      {/* Photo area with very thin white border (polaroid style) */}
      <div className="bg-white p-0.5 rounded-lg">
        <div className={`${sizeClasses[size]} ${color} rounded-lg`} />
      </div>
      
      {/* Card body (bottom white section like polaroid) */}
      <div className="card-body pt-4 pb-2 px-2 text-center">
        <h3 className="card-title text-lg font-bold text-base-content justify-center mb-1">
          {title}
        </h3>
        <p className="text-base-content/70 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
