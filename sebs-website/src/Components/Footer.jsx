export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto text-center ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p className="text-sm">Built with ❤️ using React and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
