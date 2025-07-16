export default function PackageCard({ pkg, index }) {
  return (
    <div className="bg-base-100 p-4 shadow-lg flex-none w-48 rounded-sm">
      <div className="bg-[#fcc8ba] h-32 rounded-sm mb-4"></div>
      <div className="text-center space-y-2">
        <div className="text-secondary-content font-semibold text-lg">
          {pkg.price}
        </div>
        <h4 className="font-semibold text-base-content ">
          {pkg.title}
        </h4>
        <p className="text-sm text-base-content">{pkg.description}</p>
      </div>
    </div>
  );
}