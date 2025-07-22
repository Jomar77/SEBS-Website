export default function PackageCard({ pkg, index }) {
  return (
    <div className="bg-base-100 p-4 shadow-lg flex-none w-48">
      <div className="bg-[#fcc8ba] h-27 mb-4"></div>
      <div className="text-center space-y-2">
        {/* Price with rounded rectangle background */}
        <div className="inline-block bg-[#f6efe4] px-3 py-1 rounded-xl text-secondary-content font-corben-reg text-lg">
          {pkg.price}
        </div>

        <h3 className="font-reg text-[#133445]">
          {pkg.title}
        </h3>
        <p className="text-sm text-[#133445]">{pkg.description}</p>
      </div>
    </div>
  );
}