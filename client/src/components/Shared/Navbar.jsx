// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
// import { useAuth } from "../../contexts/AuthContext";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   const { user, logout, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Exercises", path: "/exercises" },
//     { name: "Appointment", path: "/appointment" },
//     { name: "Blog", path: "/blog" },
//     { name: "Experts", path: "/experts" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const closeMobileMenu = () => setIsOpen(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     setShowUserMenu(false);
//   };

//   const getDashboardRoute = () => {
//     if (!user) return '/dashboard';
//     switch (user.role) {
//       case 'admin':
//         return '/admin/dashboard';
//       case 'doctor':
//         return '/doctor/dashboard';
//       case 'patient':
//         return '/patient/dashboard';
//       default:
//         return '/dashboard';
//     }
//   };

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" : "bg-white py-4"
//       }`}
//     >
//       <div className="container-responsive">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo - Enhanced for better visibility */}
//           <Link
//             to="/"
//             className="flex items-center group"
//             onClick={closeMobileMenu}
//           >
//             <div className="relative">
//               <img
//                 src={logo}
//                 alt="StrideWellStudio Logo"
//                 className="h-24 w-auto transform transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
//               />
//               {/* Subtle glow effect on hover */}
//               <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//             </div>
//             <span className="ml-4 text-2xl font-bold text-gray-800 hidden sm:block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               StrideWell Studio
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
//             <div className="flex space-x-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-ring ${
//                     location.pathname === link.path
//                       ? "text-blue-600 bg-blue-50"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                   }`}
//                 >
//                   {link.name}
//                   {/* Animated underline */}
//                   <span
//                     className={`absolute left-4 bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
//                       location.pathname === link.path
//                         ? "w-[calc(100%-2rem)]"
//                         : "w-0 group-hover:w-[calc(100%-2rem)]"
//                     }`}
//                   />
//                 </Link>
//               ))}
//             </div>
//           </nav>

//           {/* Desktop Auth */}
//           <div className="hidden md:flex items-center space-x-3">
//             {isAuthenticated() ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setShowUserMenu(!showUserMenu)}
//                   className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 focus-ring"
//                 >
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                     {user?.name?.charAt(0) || 'U'}
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">{user?.name}</span>
//                 </button>
                
//                 {showUserMenu && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
//                     <Link
//                       to={getDashboardRoute()}
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       onClick={() => setShowUserMenu(false)}
//                     >
//                       <FiUser className="mr-3" />
//                       Dashboard
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <FiLogOut className="mr-3" />
//                       Sign Out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="btn-outline px-4 py-2 text-sm"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="btn-primary px-4 py-2 text-sm"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 focus-ring transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden transform transition-all duration-300 ease-in-out ${
//             isOpen
//               ? "opacity-100 translate-y-0 max-h-screen"
//               : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
//           }`}
//         >
//           <div className="bg-white pt-2 pb-4 space-y-1 shadow-medium rounded-lg mx-2 mt-2 slide-up">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-colors ${
//                   location.pathname === link.path
//                     ? "text-blue-600 bg-blue-50"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                 }`}
//                 onClick={closeMobileMenu}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <div className="border-t border-gray-200 pt-2 mt-2 mx-2">
//               {isAuthenticated() ? (
//                 <>
//                   <Link
//                     to={getDashboardRoute()}
//                     className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                     onClick={closeMobileMenu}
//                   >
//                     <FiUser className="mr-3" />
//                     Dashboard
//                   </Link>
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       closeMobileMenu();
//                     }}
//                     className="w-full flex items-center px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                   >
//                     <FiLogOut className="mr-3" />
//                     Sign Out
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block px-4 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     onClick={closeMobileMenu}
//                   >
//                     Sign In
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mx-4 rounded-lg transition-colors"
//                     onClick={closeMobileMenu}
//                   >
//                     Register
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut, FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Exercises", path: "/exercises" },
    { name: "Appointment", path: "/appointment" },
    { name: "Blog", path: "/blog" },
    { name: "Experts", path: "/experts" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  const getDashboardRoute = () => {
    if (!user) return '/dashboard';
    switch (user.role) {
      case 'admin':
        return '/admin/dashboard';
      case 'doctor':
        return '/doctor/dashboard';
      case 'patient':
        return '/patient/dashboard';
      default:
        return '/dashboard';
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2 border-b border-gray-100" 
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
            onClick={closeMobileMenu}
          >
            <div className="relative flex items-center">
              <img
                src={logo}
                alt="StrideWellStudio Logo"
                className="h-10 w-auto transition-all duration-300"
              />
              <span className="ml-3 text-xl font-bold text-gray-800 hidden sm:block">
                StrideWell<span className="text-blue-600">Studio</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated() ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-sm font-medium text-gray-700 max-w-xs truncate">
                    {user?.name || 'User'}
                  </span>
                  <FiChevronDown 
                    className={`transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} 
                    size={16} 
                  />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
                    </div>
                    <Link
                      to={getDashboardRoute()}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <FiUser className="mr-3" size={16} />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <FiLogOut className="mr-3" size={16} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 max-h-screen"
              : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
          }`}
        >
          <div className="bg-white py-4 space-y-1 shadow-lg rounded-lg mt-2 border border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50 border-r-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-2">
              {isAuthenticated() ? (
                <>
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
                  </div>
                  <Link
                    to={getDashboardRoute()}
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <FiUser className="mr-3" size={18} />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="w-full flex items-center px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FiLogOut className="mr-3" size={18} />
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="px-2 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;