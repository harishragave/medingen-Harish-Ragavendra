// import React, { useState } from "react";


// const Navbar = () => {
//   return (
//     <nav className="navbar fixed top-0 left-0 w-full bg-transparent shadow-sm p-3 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <a href="#">
//             <img
//               src="./images/navlogo.png"
//               alt="Logo"
//               className="w-24 h-14"
//             />
//           </a>
//           <span className="text-2xl font-bold ml-3">Medigen</span>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           className="lg:hidden flex items-center text-gray-600"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="text-2xl">☰</span>
//         </button>

//         {/* Navbar Links */}
//         <div className="hidden md:flex items-center justify-between w-full">
//           <ul className="flex flex-row items-center justify-center mx-auto space-x-6">
//             {/* Home */}
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="me-2"
//                 >
//                   <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 1 0 .708.708L2 7.207V13.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7.207l.646.647a.5.5 0 0 0 .708-.708l-6-6z" />
//                   <path d="M13 2.5V6l-5-5-5 5V2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5z" />
//                 </svg>
//                 Home
//               </a>
//             </li>

//             {/* Offer */}
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   fill="none"
//                   stroke="#8a8a8a"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-badge-percent me-2"
//                 >
//                   <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
//                   <path d="m15 9-6 6" />
//                   <path d="M9 9h.01" />
//                   <path d="M15 15h.01" />
//                 </svg>
//                 Offer
//               </a>
//             </li>

//             {/* Notifications */}
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="me-2"
//                 >
//                   <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.7-14.1a1 1 0 1 0-1.4 0A7 7 0 0 0 2 8c0 1.1-.4 2.4-.9 3.4A.5.5 0 0 0 1 12h14a.5.5 0 0 0 .4-.6A7.018 7.018 0 0 1 14 8 7 7 0 0 0 8.7 1.9z" />
//                 </svg>
//                 Notifications
//               </a>
//             </li>

//             {/* Profile */}
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="me-2"
//                 >
//                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
//                   <path d="M14 13.5c0-2.5-2-4.5-6-4.5s-6 2-6 4.5" />
//                 </svg>
//                 Profile
//               </a>
//             </li>
//           </ul>

//           {/* Shopping Cart Icon */}
//           <div className="flex items-center">
//             <a href="#" className="text-gray-700 text-xl hover:text-gray-900">
//               <i className="bi bi-cart"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// // // import React from "react";
// // // import { Link } from "react-router-dom"; // Assuming you're using React Router

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="navbar fixed top-0 left-0 w-full bg-transparent shadow-sm p-3 z-50">
// // //       <div className="container mx-auto flex items-center justify-between">
// // //         {/* Logo */}
// // //         <div className="flex items-center">
// // //           <Link to="/" className="flex items-center">
// // //             <img
// // //               src="./images/navlogo.png"
// // //               alt="Medigen Logo"
// // //               className="w-24 h-14"
// // //             />
// // //             <span className="text-2xl font-bold ml-3">Medigen</span>
// // //           </Link>
// // //         </div>

// // //         {/* Mobile Toggle Button */}
// // //         <button
// // //           className="lg:hidden flex items-center text-gray-600"
// // //           type="button"
// // //           aria-controls="navbarNav"
// // //           aria-expanded="false"
// // //           aria-label="Toggle navigation"
// // //         >
// // //           <span className="text-2xl">☰</span>
// // //         </button>

// // //         {/* Navbar Links */}
// // //         <div className="hidden md:flex items-center justify-between w-full">
// // //           <ul className="flex flex-row items-center justify-center mx-auto space-x-6">
// // //             {/* Home */}
// // //             <li className="nav-item">
// // //               <Link
// // //                 to="/"
// // //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   width="24"
// // //                   height="24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="1"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   className="me-2"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 1 0 .708.708L2 7.207V13.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7.207l.646.647a.5.5 0 0 0 .708-.708l-6-6z" />
// // //                   <path d="M13 2.5V6l-5-5-5 5V2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5z" />
// // //                 </svg>
// // //                 Home
// // //               </Link>
// // //             </li>

// // //             {/* Offer */}
// // //             <li className="nav-item">
// // //               <Link
// // //                 to="/offers"
// // //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   width="28"
// // //                   height="28"
// // //                   fill="none"
// // //                   stroke="#8a8a8a"
// // //                   strokeWidth="1"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   className="lucide lucide-badge-percent me-2"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
// // //                   <path d="m15 9-6 6" />
// // //                   <path d="M9 9h.01" />
// // //                   <path d="M15 15h.01" />
// // //                 </svg>
// // //                 Offer
// // //               </Link>
// // //             </li>

// // //             {/* Notifications */}
// // //             <li className="nav-item">
// // //               <Link
// // //                 to="/notifications"
// // //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   width="24"
// // //                   height="24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="1"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   className="me-2"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.7-14.1a1 1 0 1 0-1.4 0A7 7 0 0 0 2 8c0 1.1-.4 2.4-.9 3.4A.5.5 0 0 0 1 12h14a.5.5 0 0 0 .4-.6A7.018 7.018 0 0 1 14 8 7 7 0 0 0 8.7 1.9z" />
// // //                 </svg>
// // //                 Notifications
// // //               </Link>
// // //             </li>

// // //             {/* Profile */}
// // //             <li className="nav-item">
// // //               <Link
// // //                 to="/profile"
// // //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// // //               >
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   width="24"
// // //                   height="24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="1"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   className="me-2"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
// // //                   <path d="M14 13.5c0-2.5-2-4.5-6-4.5s-6 2-6 4.5" />
// // //                 </svg>
// // //                 Profile
// // //               </Link>
// // //             </li>
// // //           </ul>

// // //           {/* Shopping Cart Icon */}
// // //           <div className="flex items-center">
// // //             <Link to="/cart" className="text-gray-700 text-xl hover:text-gray-900" aria-label="Shopping Cart">
// // //               <i className="bi bi-cart"></i>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;





// // import React, { useState } from "react";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-sm p-3 z-50">
// //       <div className="container mx-auto flex items-center justify-between">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <a href="/" className="flex items-center">
// //             <img
// //               src="./images/navlogo.png"
// //               alt="Medigen Logo"
// //               className="w-24 h-14"
// //             />
// //             <span className="text-2xl font-bold ml-3">Medigen</span>
// //           </a>
// //         </div>

// //         {/* Mobile Toggle Button */}
// //         <button
// //           className="lg:hidden flex items-center text-gray-600"
// //           type="button"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           aria-expanded={isMenuOpen}
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="text-2xl">☰</span>
// //         </button>

// //         {/* Navbar Links */}
// //         <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center justify-between w-full`}>
// //           <ul className="flex flex-col md:flex-row items-center justify-center mx-auto space-y-4 md:space-y-0 md:space-x-6">
// //             {/* Home */}
// //             <li className="nav-item">
// //               <a
// //                 href="/"
// //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="me-2"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 1 0 .708.708L2 7.207V13.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7.207l.646.647a.5.5 0 0 0 .708-.708l-6-6z" />
// //                   <path d="M13 2.5V6l-5-5-5 5V2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5z" />
// //                 </svg>
// //                 Home
// //               </a>
// //             </li>

// //             {/* Offer */}
// //             <li className="nav-item">
// //               <a
// //                 href="/offers"
// //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="28"
// //                   height="28"
// //                   fill="none"
// //                   stroke="#8a8a8a"
// //                   strokeWidth="1"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="lucide lucide-badge-percent me-2"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
// //                   <path d="m15 9-6 6" />
// //                   <path d="M9 9h.01" />
// //                   <path d="M15 15h.01" />
// //                 </svg>
// //                 Offer
// //               </a>
// //             </li>

// //             {/* Notifications */}
// //             <li className="nav-item">
// //               <a
// //                 href="/notifications"
// //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="me-2"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.7-14.1a1 1 0 1 0-1.4 0A7 7 0 0 0 2 8c0 1.1-.4 2.4-.9 3.4A.5.5 0 0 0 1 12h14a.5.5 0 0 0 .4-.6A7.018 7.018 0 0 1 14 8 7 7 0 0 0 8.7 1.9z" />
// //                 </svg>
// //                 Notifications
// //               </a>
// //             </li>

// //             {/* Profile */}
// //             <li className="nav-item">
// //               <a
// //                 href="/profile"
// //                 className="nav-link flex items-center text-gray-700 font-semibold hover:bg-gray-100 hover:rounded-full px-4 py-2"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="me-2"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
// //                   <path d="M14 13.5c0-2.5-2-4.5-6-4.5s-6 2-6 4.5" />
// //                 </svg>
// //                 Profile
// //               </a>
// //             </li>
// //           </ul>

// //           {/* Shopping Cart Icon */}
// //           <div className="flex items-center">
// //             <a href="/cart" className="text-gray-700 text-xl hover:text-gray-900" aria-label="Shopping Cart">
// //               <i className="bi bi-cart"></i>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex space-x-4">
              <div>
                <a href="/" className="flex items-center py-5 px-2">
                  <img
                    src="./images/navlogo.png"
                    alt="Medigen Logo"
                    className="w-24 h-14 mr-2"
                  />
                  <span className="font-bold text-2xl">Medigen</span>
                </a>
              </div>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
              <a href="/offers" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Offers
              </a>
              <a href="/notifications" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notifications
              </a>
              <a href="/profile" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </a>
              <a href="/cart" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                className="mobile-menu-button p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
          <a href="/offers" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Offers
          </a>
          <a href="/notifications" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notifications
          </a>
          <a href="/profile" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </a>
          <a href="/cart" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;