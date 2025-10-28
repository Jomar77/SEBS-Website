import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";

export default function PackageCard({ pkg, index }) {
  const navigate = useNavigate();
  const { updateBooking } = useBooking();

  const handleBookPackage = () => {
    // Pre-select the service and navigate to booking with date step
    updateBooking({ 
      service: {
        id: pkg.id,
        title: pkg.title,
        basePrice: pkg.price.replace('$', ''), // Remove $ for basePrice
        description: pkg.description,
        imageUrl: pkg.imageUrl,
        imageAlt: pkg.imageAlt,
      }
    });
    navigate("/booking/date");
  };

  return (
    <div className="bg-base-100 p-4 shadow-lg flex-none w-48 h-80 flex flex-col transition-all duration-300 hover:shadow-xl">
      {/* Image or color placeholder */}
      {pkg.imageUrl ? (
        <div className="h-32 mb-4 overflow-hidden flex-shrink-0">
          <img
            src={pkg.imageUrl}
            alt={pkg.imageAlt || pkg.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="bg-[#fcc8ba] h-32 mb-4 flex-shrink-0"></div>
      )}
      
      <div className="text-center space-y-2 flex flex-col flex-1 overflow-hidden">
        {/* Price with rounded rectangle background */}
        <div className="inline-block bg-[#f6efe4] px-3 py-1 rounded-xl text-secondary-content font-corben-reg text-lg self-center">
          {pkg.price}
        </div>

        <h3 className="font-serif text-[#133445] font-semibold ">
          {pkg.title}
        </h3>
        
        {/* Book Button */}
        <button
          onClick={handleBookPackage}
          className="btn btn-sm bg-[#fec0ae] text-white border-none hover:bg-[#f5bd64] transition-colors mt-auto cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}