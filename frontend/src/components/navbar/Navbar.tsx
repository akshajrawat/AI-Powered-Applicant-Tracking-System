import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white rounded-full h-9 w-full text-sm sm:text-xl px-3 py-5 sm:py-7 sm:px-4 shadow-sm border border-[#00000029]">
      <Link className="font-bold" to={"/"}>
        <p className="text-gradient"> ResumeAI</p>
      </Link>

      <Link
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 sm:py-3 rounded-full text-xs font-semibold"
        to={"/upload"}
      >
        <p> Upload Resume</p>
      </Link>
    </nav>
  );
};

export default Navbar;
