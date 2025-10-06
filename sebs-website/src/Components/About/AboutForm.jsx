import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  RiFacebookFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { FaFacebookMessenger, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function AboutForm() {
  const logo1Ref = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate logo1 since logo2 was removed
      const logo1 = logo1Ref.current;
      if (logo1) {
        logo1.addEventListener('mouseenter', () => {
          gsap.to(logo1, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        logo1.addEventListener('mouseleave', () => {
          gsap.to(logo1, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

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
                description: "Chat with us instantly"
              },
              {
                icon: FaEnvelope,
                label: "Email",
                color: "text-[#ffc571]",
                description: ".com"
              },
              {
                icon: FaFacebook,
                label: "Facebook",
                color: "text-[#4a90e2]",
                description: "Follow our page"
              },
              {
                icon: FaWhatsapp,
                label: "Whatsapp",
                color: "text-[#fb8950]",
                description: "+64 21 123 4567"
              },
            ].map(({ icon: Icon, label, color, description }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-sm"
              >
                <Icon className={`text-4xl mb-2 ${color}`} />
                <p className="font-semibold text-lg text-[#23404a]">{label}</p>
                <p className="text-sm text-[#23404a] mt-1">{description}</p>
              </div>
            ))}
          </div>
          {/* Showcase Box */}
          <div className="rounded-2xl bg-[#f6eada] h-80 w-full flex items-center justify-center p-8">
            <div className="flex flex-col items-center justify-center gap-6 h-full w-full">
              <div ref={logo1Ref} className="cursor-pointer">
                <img 
                  src="/img/LOGO5 copy.png" 
                  alt="Psalm & Platter Logo" 
                  className="h-84 w-auto object-contain max-w-full mix-blend-multiply"
                />
              </div>
            </div>
          </div>
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
              className=" w-full rounded-xl bg-[#f0a7c2] text-white font-semibold rounded-md hover:bg-white hover:text-[#f0a7c2] transition duration-200"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
