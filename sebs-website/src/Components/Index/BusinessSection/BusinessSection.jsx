export default function BusinessSection() {
  return (
    <section className="w-full py-16 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Card 1 */}
          <div className="bg-[#f5f1e8] rounded-xl p-8 flex items-center justify-center h-48">
            <div className="w-24 h-24 bg-[#8b9557] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">P&P</span>
            </div>
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