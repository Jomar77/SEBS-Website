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
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-[#efaac3]">Psalm</span>
              </h1>
              <h2 className="text-5xl font-bold leading-tight">
                <span className="text-[#8fc2c3]">&</span>
                <span className="text-[#efaac3]"> </span>
                <span className="text-[#ffc571]">P</span>
                <span className="text-[#8fc2c3]">l</span>
                <span className="text-[#fb8950]">a</span>
                <span className="text-[#efaac3]">t</span>
                <span className="text-[#ffc571]">t</span>
                <span className="text-[#fb8950]">e</span>
                <span className="text-[#efaac3]">r</span>
              </h2>
              <p className="text-2xl text-[#ffc571] font-script mt-4 italic">
                something
              </p>
            </div>

            {/* Pink Book Now button */}
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
