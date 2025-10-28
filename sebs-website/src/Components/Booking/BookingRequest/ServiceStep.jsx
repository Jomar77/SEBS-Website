import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import { useData } from "../../../Context/DataContext";
import { useEffect } from "react";
import BookServiceSection from "../ServiceSectionBooking/BookServiceSection";

export default function ServiceStep() {
  const { booking, updateBooking } = useBooking();
  const { services, loading, error } = useData();
  const navigate = useNavigate();

  // If service is already pre-selected (from package card), skip to date step
  useEffect(() => {
    if (booking.service && booking.service.id) {
      navigate("/booking/date", { replace: true });
    }
  }, [booking.service, navigate]);

  function handleSelect(service) {
    updateBooking({ service });
    navigate("/booking/date");
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        Failed to load services. Please try again later.
      </div>
    );
  }

  // Transform services data to match ServiceCard props
  const transformedServices = services.map((service) => ({
    id: service.id,
    price: `$${service.basePrice}`,
    title: service.title,
    desc: "Per Event",
    highlight: false,
    imageUrl: service.imageUrl,
    imageAlt: service.imageAlt,
    onClick: () => handleSelect(service),
  }));

  return <BookServiceSection services={transformedServices} />;
}