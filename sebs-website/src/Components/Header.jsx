 export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav className="mt-2">
            <ul className="flex space-x-4">
            <li>
                <a href="/" className="hover:underline">
                Home
                </a>
            </li>
            <li>
                <a href="/about" className="hover:underline">
                About Me
                </a>
            </li>
            <li>
                <a href="/booking" className="hover:underline">
                Booking
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}