

import {
  RiFacebookFill,
  RiMessage2Fill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri";

export default function AboutForm() {
  return (
    <>
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
                <div key={i} className="card bg-secondary p-6 text-center">
                  <Icon className="text-2xl mx-auto" />
                  <p className="mt-2">{label}</p>
                  <p className="text-sm">hdshdkhskhfh</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary h-40"></div>
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
    </>
  );
}
