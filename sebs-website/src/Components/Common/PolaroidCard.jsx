export default function PolaroidCard({ color, imageUrl, alt = "", className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-[96px]",
    default: "h-[140px]",
    large: "h-[200px]",
  };

  return (
    <div
      className={`flex flex-col w-full max-w-[260px] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] bg-white ${className}`}
    >
      {/* Image or colored gradient section */}
      {imageUrl ? (
        <div className={`w-full ${sizeClasses[size]} overflow-hidden`}>
          <img
            src={imageUrl}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className={`w-full ${sizeClasses[size]} ${color}`} />
      )}

      {/* Optional content area inside the white footer */}
      <div className="w-full h-[60px]" />
    </div>
  );
}