import WavePattern from '../../Common/WavePattern';
import ServiceCard from './ServiceCard';

export default function BookServiceSection( { services }) {
  return (
    <section className="relative py-4 overflow-hidden bg-base-100 text-base-content ">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <WavePattern />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-serif font-bold text-center text-[#0e465a] mt-12 mb-10">
          Book A Service
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
