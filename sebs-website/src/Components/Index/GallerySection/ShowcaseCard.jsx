export default function ShowcaseCard({ color, index }) {
  return (
    <div className="gallery-card w-1/4 px-3">
      {/* White card container */}
      <div className="bg-base-100 rounded-3xl shadow-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Colored rectangle inside */}
        <div className={`w-full h-64 rounded-2xl ${color}`}>
          {/* Placeholder for image content */}
        </div>
      </div>
    </div>
  );
}