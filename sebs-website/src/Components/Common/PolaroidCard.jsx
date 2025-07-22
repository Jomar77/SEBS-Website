export default function PolaroidCard({ color, className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-32",
    default: "h-40",
    large: "h-56",
  };

  return (
    <div className={`flex flex-col items-center w-full max-w-xs ${className}`}>
      {/* Colored image area */}
      <div className={`w-full ${sizeClasses[size]} ${color} rounded-t-lg`} />
      {/* Polaroid base */}
      <div className="w-full bg-white rounded-b-lg shadow-lg h-8" />
    </div>
  );
}