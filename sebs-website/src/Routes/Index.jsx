import GallerySection from "../Components/Index/GallerySection/GallerySection";
import ServiceSection from "../Components/Index/ServiceSection/ServiceSection";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import ReviewSection from "../Components/Index/ReviewSection/ReviewSection";

export default function Index() {
  return (
    <div className="bg-white">
      <section className="flex flex-col items-center justify-center h-screen bg-base-100">
        <h1 className="text-4xl font-bold text-primary-content">
          Welcome to My Website
        </h1>
      </section>

      <ServiceSection />
      <GallerySection />
      <EventPackageSection />
      <ReviewSection />
    </div>
  );
}
