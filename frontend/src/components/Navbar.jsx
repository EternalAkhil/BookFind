import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// function start
const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token')

  const toggleHam = () => {
    setHamOpen((prev) => !prev);
  };


  const logout = ()=>{
    localStorage.clear()
    sessionStorage.removeItem('token')
    navigate("/login")

  }

  return (
    <nav className="bg-transparent  backdrop-filter backdrop-blur-sm relative z-50  border-b w-[80%] mx-auto">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto  lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-white text-2xl font-bold tracking-wider hover:text-yellow-300"
          >
            BookFind
          </Link>

          {/* Hamburger Icon for Mobile */}
          {hamOpen?<FaTimes className='fill-white size-5 active:fill-yellow-400 lg:hidden' onClick={toggleHam}/>:<FaBars className="fill-white size-5 active:fill-yellow-400 lg:hidden" onClick={toggleHam}/>}

          {/* Links for large screens */}
          <div className="hidden lg:flex space-x-6 items-center">
            {token&&<Link
              to="/"
              className="text-white text-lg font-semibold hover:text-yellow-300 px-3 py-2 transition duration-300"
            >
              Home
            </Link>}
            {!token&&<Link
              to="/login"
              className="text-white text-lg font-semibold hover:text-yellow-300 px-3 py-2 transition duration-300"
            >
              Login
            </Link>}
            
            {!token&& <Link
              to="/register"
              className="text-white text-lg font-semibold hover:text-yellow-300 px-3 py-2 transition duration-300"
            >
              Register
            </Link>}
           

            {/* Dropdown for logged-in user */}
            {sessionStorage.getItem("token") && (
              <div className="relative">
                <button
                  onMouseEnter={()=>setDropdownOpen(true)}
                  onMouseLeave={()=>setDropdownOpen(false)}
                  className="text-white text-lg font-semibold hover:text-yellow-300 px-3 py-2 rounded-lg transition duration-1000"
                >
                  {localStorage.getItem("username")?.toUpperCase()}
                </button>
                {dropdownOpen && (
                  <ul className="absolute bg-black-300  text-lg font-semibold w-40 rounded-lg shadow-lg text-white "
                  onMouseEnter={()=>setDropdownOpen(true)}
                  onMouseLeave={()=>setDropdownOpen(false)}>
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-black-700 rounded-t-lg transition" 
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/favourites"
                        className="block px-4 py-2 hover:bg-black-700 transition"
                       
                      >
                        Favourites
                      </Link>
                    </li>
                    <li className="hover:bg-black-700 transition">
                        <button className="block px-4 py-2  rounded-b-lg "
                        onClick={logout}>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {hamOpen && (
        <div className="lg:hidden bg-transparent backdrop-filter backdrop-blur-sm  text-white">
          <ul className="flex flex-col space-y-2 p-2 text-center items-center">
            <li>
              {token&&<Link
                to="/"
                className="block px-4 py-2 hover:bg-white hover:text-black rounded-lg transition"
                onClick={toggleHam}
              >
                Home
              </Link>}
              
            </li>
            <li>
              {!token&&<Link
                to="/login"
                className="block px-4 py-2 hover:bg-white hover:text-black rounded-lg transition"
                onClick={toggleHam}
              >
                Login
              </Link>}
              
            </li>
            <li>
              <Link
                to="/register"
                className="block px-4 py-2 hover:bg-white hover:text-black rounded-lg transition"
                onClick={toggleHam}
              >
                Register
              </Link>
            </li>
            {sessionStorage.getItem("token") && (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-white hover:text-blackrounded-lg transition"
                    onClick={toggleHam}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favourites"
                    className="block px-4 py-2 hover:bg-white hover:text-black rounded-lg transition"
                    onClick={toggleHam}
                  >
                    Favourites
                  </Link>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-white hover:text-black rounded-lg transition"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
