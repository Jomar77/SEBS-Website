export default function BusinessSection() {
  return (
    <section className="w-full py-16 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Card 1 */}
          <div className="bg-[#f5f1e8] p-8 flex items-center justify-center h-48">
            <img 
              src="public/img/IMG_2719.png"
              alt="Psalm & Platter Logo" 
              className="w-50 h-50 object-contain"
              loading="lazy"
            />
          </div>
          
          {/* Business Card 2 */}
          <div className="bg-[#f5f1e8] p-8 flex items-center justify-center h-48">
            <img 
              src="/img/Logo 2.png"
              alt="The Arkives Logo" 
              className="w-40 h-40 object-contain"
              loading="lazy"
            />
          </div>
          
          {/* Business Card 3 */}
          <div className="bg-[#f5f1e8] p-8 flex items-center justify-center h-48">
            <img 
              src="/img/Whiskers.png"
              alt="Whiskers Logo" 
              className="w-55 h-55 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}