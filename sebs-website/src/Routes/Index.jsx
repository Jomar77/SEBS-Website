import GallerySection from "../Components/Index/GallerySection/GallerySection";
import ServiceSection from "../Components/Index/ServiceSection/ServiceSection";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import ReviewSection from "../Components/Index/ReviewSection/ReviewSection";
import AnimatedBackground from "../Components/Index/AnimatedBackground/AnimatedBackground";
import BusinessSection from "../Components/Index/BusinessSection/BusinessSection";

export default function Index() {
  return (
    <div className="bg-white">
      <section className="relative flex flex-col items-center justify-center h-screen bg-base-100 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          {/* White background card */}
          <div className="bg-white/80 rounded-3xl shadow-2xl p-2 text-center">
            {/* Logo Image */}
            <div className="flex justify-center">
              <img
                src="/public/img/Psalm and Platter.png"
                alt="Psalm & Platter"
                className="h-100 w-auto"
              />
            </div>
          </div>

          {/* Pink Book Now button - outside container, centered */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#efaac3] hover:bg-[#e89bb4] text-white font-bold py-4 px-12 rounded-full text-xl transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      <BusinessSection />
      <ServiceSection />
      <GallerySection />
      <EventPackageSection />
      <ReviewSection />
    </div>
  );
}
