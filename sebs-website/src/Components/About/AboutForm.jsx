import {
  RiFacebookFill,
  RiMessage2Fill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri";

export default function AboutForm() {
  return (
    <section className="bg-[#fcf4ea] px-4 md:px-30 py-20">
      <div className="grid md:grid-cols-2 gap-25 items-start ">
        {/* Left: Contact Cards & Showcase Box */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: RiMessage2Fill,
                label: "Messenger",
                color: "text-[#6bb7b7]",
              },
              {
                icon: RiMailFill,
                label: "Email",
                color: "text-[#fbbd71]",
              },
              {
                icon: RiFacebookFill,
                label: "Facebook",
                color: "text-[#4a90e2]",
              },
              {
                icon: RiWhatsappFill,
                label: "Whatsapp",
                color: "text-[#f47c3c]",
              },
            ].map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-sm"
              >
                <Icon className={`text-4xl mb-2 ${color}`} />
                <p className="font-semibold text-lg text-[#23404a]">{label}</p>
                <p className="text-sm text-[#23404a] mt-1">hdshdkhskhfh</p>
              </div>
            ))}
          </div>
          {/* Showcase Box */}
          <div className="rounded-2xl bg-[#f6eada] h-80 w-full"></div>
        </div>
        {/* Right: Form */}
        <div>
          <h3 className="text-4xl font-bold text-[#23404a] mb-2">
            Get in touch
          </h3>
          <p className="mb-6 text-[#23404a]">
            Your celebration deserves more than just food—it deserves an
            experience. Our gourmet grazing cart redefines event catering with
            fresh, artfully styled spreads that dazzle the senses.
          </p>
          <form className="space-y-4">
            {["Name", "Email", "Subject"].map((field) => (
              <div key={field}>
                <label className="block text-[#23404a] mb-1">{field}</label>
                <input
                  type={field === "Email" ? "email" : "text"}
                  className="border border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
                />
              </div>
            ))}
            <div>
              <label className="block text-[#23404a] mb-1">Message</label>
              <textarea
                className="border border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-pink-300 text-white text-lg py-2 mt-2"
            >
              Button
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
