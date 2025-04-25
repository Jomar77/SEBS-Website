export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
      <p className="mt-4 text-lg text-gray-700">
        I am a passionate web developer with a love for creating beautiful and
        functional websites. I enjoy working with the latest technologies and
        continuously learning new skills.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to the homepage
      </a>
    </div>
  );
}