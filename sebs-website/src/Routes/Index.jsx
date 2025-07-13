import GallerySection from "../Components/Index/GallerySection/GallerySection";
import ServiceSection from "../Components/Index/ServiceSection/ServiceSection";
import EventPackageSection from "../Components/About/EventPackageSection";

export default function Index() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-base-100">
        <h1 className="text-4xl font-bold text-primary-content">
          Welcome to My Website
        </h1>
      </section>
      
      {/* Services Section - No container padding/margins */}
      <ServiceSection />
      <GallerySection />
      <EventPackageSection />
    </div>
  );
}
