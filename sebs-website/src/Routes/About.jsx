import React from "react";
import {
  RiFacebookFill,
  RiMessage2Fill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri";

export default function App() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center">About us</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center">
          Welcome to diwqinds, where creativity, flavor, and unforgettable
          moments come to life in Invercargill, New Zealand...
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white"
            >
              P&amp;P
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Psalm &amp; Platter: Elegance Meets Flavor
          </h3>
          <p>Our celebration deserves more than just food...</p>
        </div>
        <div className="bg-base-200 h-40"></div>

        <div className="bg-base-200 h-40"></div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            The Arkives: Capture The Moment
          </h3>
          <p>Say cheese—and let the enchantment begin!...</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Psalm &amp; Platter: Elegance Meets Flavor
          </h3>
          <p>Our celebration deserves more than just food...</p>
        </div>
        <div className="bg-base-200 h-40"></div>
      </section>

      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold">Get in touch</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: RiMessage2Fill, label: "Messenger" },
                { icon: RiMailFill, label: "Email" },
                { icon: RiFacebookFill, label: "Facebook" },
                { icon: RiWhatsappFill, label: "Whatsapp" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="card bg-base-200 p-6 text-center">
                  <Icon className="text-2xl mx-auto" />
                  <p className="mt-2">{label}</p>
                  <p className="text-sm">hdshdkhskhfh</p>
                </div>
              ))}
            </div>
            <div className="bg-base-200 h-40"></div>
          </div>

          <form className="space-y-4">
            {["Name", "Email", "Subject"].map((field) => (
              <div key={field}>
                <label className="block">{field}</label>
                <input
                  type={field === "Email" ? "email" : "text"}
                  className="input input-bordered w-full"
                />
              </div>
            ))}
            <div>
              <label className="block">Message</label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>
            <button type="button" className="btn btn-primary w-full">
              Send
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 py-12 bg-base-200">
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
    </div>
  );
}
