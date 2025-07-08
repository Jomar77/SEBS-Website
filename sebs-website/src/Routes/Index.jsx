export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100">
      <h1 className="text-4xl font-bold text-primary-content">Welcome to My Website</h1>
      <p className="mt-4 text-lg text-base-content">
        This is a simple website built with React and Tailwind CSS.
      </p>
      <a href="/about" className="mt-6 text-secondary hover:underline">
        Go to About Me
      </a>
    </div>
  );
}