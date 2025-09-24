import {
  RiFacebookFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { FaFacebookMessenger, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function AboutForm() {
  return (
    <section className="bg-[#fcf4ea] px-4 md:px-30 py-20">
      <div className="grid md:grid-cols-2 gap-25 items-start ">
        {/* Left: Contact Cards & Showcase Box */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: FaFacebookMessenger,
                label: "Messenger",
                color: "text-[#9ac1c2]",
              },
              {
                icon: FaEnvelope,
                label: "Email",
                color: "text-[#ffc571]",
              },
              {
                icon: FaFacebook,
                label: "Facebook",
                color: "text-[#4a90e2]",
              },
              {
                icon: FaWhatsapp,
                label: "Whatsapp",
                color: "text-[#fb8950]",
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
          <h3 className="font-corben-reg text-5xl text-[#0e465a] mb-2 py-3">
            Get in touch
          </h3>
          <p className="mb-6 text-[#23404a] py-3">
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
                  className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-2 focus:outline-none bg-white"
                />
              </div>
            ))}
            <div>
              <label className="block text-[#23404a] mb-1">Message</label>
              <textarea
                className="border-[0.5px] border-[#23404a] rounded-md w-full px-3 py-5 focus:outline-none bg-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="button"
              className="border-[0.5px] border-[#23404a] w-full rounded-xl bg-[#f0a7c2] text-white font-semibold rounded-md hover:bg-white hover:text-[#f0a7c2] transition duration-200"
            >
              Button
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
