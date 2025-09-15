export default function BusinessSection() {
  return (
    <section className="w-full py-16 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Card 1 */}
          <div className="bg-[#f5f1e8] rounded-xl p-8 flex items-center justify-center h-48">
            <img 
              src="/img/P&P2 (1).png"
              alt="Psalm & Platter Logo" 
              className="w-40 h-40 object-contain"
              loading="lazy"
            />
          </div>
          
          {/* Business Card 2 */}
          <div className="bg-[#f5f1e8] rounded-xl p-8 flex items-center justify-center h-48">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2"></div>
              <p className="text-sm">Business Logo</p>
            </div>
          </div>
          
          {/* Business Card 3 */}
          <div className="bg-[#f5f1e8] rounded-xl p-8 flex items-center justify-center h-48">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2"></div>
              <p className="text-sm">Business Logo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}