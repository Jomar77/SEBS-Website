import WavePattern from "../Common/WavePattern";

export default function AboutIntroduction() {
  return (
    <section className=" relative md:py-26 px-6 ">
      <div className="absolute inset-0 opacity-30">
        <WavePattern />
      </div>
      <div className="justify-center items-center ">
        <h2 className="text-4xl font-bold text-center">About us</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center">
          Welcome to diwqinds, where creativity, flavor, and unforgettable
          moments come to life in Invercargill, New Zealand...
        </p>
      </div>
    </section>
  );
}
