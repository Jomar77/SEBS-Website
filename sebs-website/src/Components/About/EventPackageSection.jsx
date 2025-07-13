


export default function EventPackageSection() {
  return (
    <>
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold">Your Event Toolkit</h3>
          <p className="mt-4">Lorem ipsum dolor sit amet...</p>
          <div className="mt-8 flex items-center space-x-4 overflow-x-auto">
            {[
              { price: "$300", title: "Package A" },
              { price: "$450", title: "Package B", outline: true },
            ].map((pkg, i) => (
              <div key={i} className="card w-48 bg-base-100 p-4">
                <div className="h-32 bg-primary/30"></div>
                <div className="mt-2">
                  <div
                    className={pkg.outline ? "badge badge-outline" : "badge"}
                  >
                    {pkg.price}
                  </div>
                  <h4 className="font-semibold">{pkg.title}</h4>
                  <p className="text-sm">Lorem ipsum</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
