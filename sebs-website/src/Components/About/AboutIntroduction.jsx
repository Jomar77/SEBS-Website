import WavePattern from "../Common/WavePattern";

export default function AboutIntroduction() {
  return (
    <section className="relative md:py-26 px-6 bg-base-200 min-h-96">
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <WavePattern />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-96">
        <h2 className="text-5xl text-center font-yeseva text-[#0e465a]">About us</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-[#23404a]">
          Welcome to Psalm & Platter, where creativity, flavor, and unforgettable
          moments come to life in Invercargill, New Zealand...
        </p>
      </div>
    </section>
  );
}
