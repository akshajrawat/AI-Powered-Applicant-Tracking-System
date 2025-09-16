import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white rounded-full h-9 w-full text-sm px-3 py-2 shadow-sm">
      <Link className="font-bold" to={"/"}>
        <p> ResumeAI</p>
      </Link>

      <Link className="bg-purple-600 text-white px-2 py-1 rounded-full" to={"/upload"}>
        <p> Upload Resume</p>
      </Link>
    </nav>
  );
};

export default Navbar;
