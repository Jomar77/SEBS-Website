import { useEffect, useState } from "react";
import { fetchServices } from "../Services/serviceApi";
import { getApiUrl } from "../Utils/apiConfig";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = getApiUrl();
    fetchServices()
      .then((data) => {
        setServices(
          data.map((service) => ({
            id: service.serviceID,
            title: service.name,
            description: service.description,
            basePrice: service.basePrice,
            imageUrl: service.imageUrl ? `${apiUrl}${service.imageUrl}` : null,
            imageAlt: service.image?.fileName || service.name,
            colorClass: service.name.includes("Photobooth")
              ? "bg-[#ffc571]"
              : service.name.includes("Grazing") || service.name.includes("Psalm")
              ? "bg-[#f3794c]"
              : service.name.includes("Design")
              ? "bg-[#efaac3]"
              : service.name.includes("Whiskers") || service.name.includes("Matcha")
              ? "bg-[#8fc2c3]"
              : "bg-[#8fc2c3]",
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Failed to fetch services", err);
      });
  }, []);

  return { services, loading, error };
}
