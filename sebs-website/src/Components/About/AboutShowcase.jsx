export default function AboutShowcase() {
  return (
    <section className="bg-white px-20 grid md:grid-cols-2 w-full justify-center gap-32 md:py-40">
      <div className="space-y-4 flex flex-col justify-center h-full">
        <h3 className="font-corben-reg text-2xl text-[#ffc571] text-left">
          Psalm &amp; Platter: Elegance Meets Flavor
        </h3>
        <p className="text-[#23404a]">
          Your celebration deserves more than just food-it deserves an
          experience. Our gourmet grazing cart redefines event catering with
          fresh, artfully styled spreads that dazzle the senses. From intimate
          birthdays to grand weddings and corporate gatherings, our
          carefully curated packages blend premium local ingredients with
          gatherings, our carefully curated packages blend premium local
          ingredients with stunning presentation. Every bite is crafted to
          reflect your event's unique vibe, ensuring a feast that's as
          Instagram-worthy as it is delicious.
        </p>
      </div>
      <div className="bg-base-200 h-40 flex justify-center items-center rounded-2xl overflow-hidden">
        <img 
          src="/img/P&P New.png" 
          alt="Psalm & Platter gourmet grazing cart" 
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="bg-base-200 h-40 flex justify-center items-center rounded-2xl overflow-hidden">
        <img 
          src="/img/LOGO5 copy.png" 
          alt="The Arkives photo booth experience" 
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 flex flex-col justify-center h-full">
        <h3 className="font-corben-reg text-2xl text-[#fb8950] text-left">
          The Arkives: Capture The Moment
        </h3>
        <p className="text-[#23404a]">
          Say cheese and let the enchantment begin! Our cutting-edge photo booth
          with customizable themes, instant prints, and digital keepsakes, The
          Arkives turns every casual get-together into a memorable event. With
          customizable themes, instant prints, and digital keepsakes, The
          Arkives is here to add a sprinkle of fun and a lifetime of smiles.
        </p>
      </div>

      <div className="space-y-4 flex flex-col justify-center h-full">
        <h3 className="font-corben-reg text-2xl text-[#9ac1c2] text-left">
          Matcha Cart: Matcha Magic
        </h3>
        <p className="text-[#23404a]">
          Our gourmet grazing cart redefines event catering with fresh, artfully
          styled spreads that gather, our carefully curated packages blend
          premium local ingredients with stunning presentation. Every bite is
          crafted to reflect your event's unique vibe, ensuring a feast that's
          as Instagram-worthy as it is delicious.
        </p>
      </div>  
      <div className="bg-base-200 h-40 flex justify-center items-center rounded-2xl overflow-hidden">
        <img 
          src="/img/Whiskers.png" 
          alt="Matcha Cart service" 
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
