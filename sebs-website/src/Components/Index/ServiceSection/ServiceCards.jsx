import { Link } from "react-router-dom";

export default function ServiceShowcaseCard({
  id,
  title,
  description,
  colorClass,
}) {
  return (
    <div className="bg-[#fff] border-20 border-white shadow-lg flex flex-col overflow-hidden w-full max-w-[350px] lg:max-w-none lg:flex-1 h-[480px]">
      {/* Color/Image Block */}
      <div className={`w-full h-50 ${colorClass}`} />

      {/* Card Body */}
      <div className="p-6 text-center flex flex-col flex-1">
        <h3 className="font-corben-bold text-xl text-[#204558] mb-2 font-bold truncate">
          {title}
        </h3>
        <p className="font-montserrat-alt text-sm text-[#204558] opacity-80 mb-6 leading-tight flex-1 overflow-hidden text-ellipsis line-clamp-4">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to="/booking"
            className="inline-block px-6 py-3 rounded-xl bg-[#fec0ae] text-white text-xs font-bold uppercase tracking-wide shadow hover:bg-[#f5bd64] transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
