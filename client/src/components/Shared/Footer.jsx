import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-blue-400" />,
      text: "stridewellstudio@gmail.com",
      link: "mailto:stridewellstudio@gmail.com",
    },
    {
      icon: <FiPhone className="text-blue-400" />,
      text: "9004684173",
      link: "tel:9004684173",
    },
    {
      icon: <FiMapPin className="text-blue-400" />,
      text: "Kedarnath Mandir Marg, Nehru Nagar, Kurla, Mumbai, Maharashtra 400024",
      link: "https://maps.google.com/?q=Stride+Well+Studio,+Mumbai",
      target: "_blank", 
    },
  ];

  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Exercises", link: "/exercises" },
        { name: "Appointment", link: "/appointment" },
        { name: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Physical Therapy", link: "/exercises" },
        { name: "Rehabilitation", link: "/exercises" },
        { name: "Sports Therapy", link: "/exercises" },
        { name: "Massage Therapy", link: "/exercises" },
        { name: "Wellness Programs", link: "/exercises" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "FAQ", link: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, link: "#" },
    { name: "Twitter", icon: <FaTwitter />, link: "#" },
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, link: "#" },
    { name: "YouTube", icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float animation-delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-float animation-delay-4000" />

      <div className="relative z-10 container-responsive py-16">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="StrideWellStudio Logo"
                className="h-16 w-auto mr-4 drop-shadow-lg"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                StrideWell Studio
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering your journey to better health through personalized
              therapy and rehabilitation programs tailored to your unique needs.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.target || "_self"}
                  rel={info.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  aria-label={info.text}
                >
                  <span className="mr-3 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {links.map((section, index) => (
            <nav key={index} aria-label={section.title}>
              <h4 className="text-lg font-semibold mb-6 text-white/90">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 mr-3 transition-opacity"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} StrideWell Studio. All rights
              reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-gray-700"></div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={`Visit our ${social.name} page`}
                title={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500/20 hover:text-blue-400 transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10">{social.icon}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
