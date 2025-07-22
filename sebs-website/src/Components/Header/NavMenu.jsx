import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book" },
];

export default function NavMenu() {
  return (
    <ul className="flex justify-center space-x-16 py-1">
      {navLinks.map(({ to, label, end }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
              `uppercase font-bold font-vietnam tracking-wide hover: ${
                isActive ? "text-white" : "text-secondary-content hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}