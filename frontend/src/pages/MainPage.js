// import React from "react";

// const MainPage = () => {
//   return (
    // <div className="container mx-auto px-4">
    //   <div className="mb-4 flex items-center">
    //     <span className="text-xl">
    //       <i className="bi bi-chevron-left"></i>
    //     </span>
    //     <span className="ml-2 font-bold text-lg">Paracetamol/acetaminophen</span>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {/* Left Section - Medicine Details */}
    //     <div className="md:col-span-2">
    //       <div className="text-center font-semibold text-sm bg-gray-100 p-3 rounded mb-4">
    //         Medicine Details
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded shadow">
    //         <h5 className="font-bold text-lg mb-3">About UDILIV 300MG TABLET 15'S</h5>
    //         <p className="mb-4">
    //           UDILIV 300MG TABLET 15'S (UDCA) is naturally occurring bile acid derived from bear bile,
    //           and it is also produced synthetically. It has been used for several decades as a
    //           therapeutic agent to manage various liver disorders. UDCA is primarily known for its
    //           hepatoprotective properties and is used in the treatment of gallstones, primary biliary
    //           cholangitis (PBC), and other cholestatic liver conditions. This bile acid works by
    //           reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory
    //           effects.
    //         </p>

    //         <h5 className="font-bold text-lg mb-3">Uses of UDILIV 300MG TABLET 15'S</h5>
    //         <ul className="list-disc ml-6 mb-4">
    //           <li>Helps in dissolving gallstones</li>
    //           <li>Used in the treatment of primary biliary cholangitis (PBC)</li>
    //           <li>Aids in managing other cholestatic liver disorders</li>
    //           <li>Can be used to prevent gallstone formation</li>
    //         </ul>

    //         <h5 className="font-bold text-lg mb-3">How UDILIV 300MG TABLET 15'S Works</h5>
    //         <ul className="list-disc ml-6 mb-4">
    //           <li>
    //             Dosage for children: The dosage of UDILIV 300MG TABLET 15'S for children depends on
    //             their body weight and the specific liver disorder being treated. It is typically
    //             prescribed by a pediatrician or gastroenterologist who will determine the appropriate
    //             dosage.
    //           </li>
    //           <li>
    //             Dosage for adults: The recommended dosage of UDILIV 300MG TABLET 15'S for adults varies
    //             depending on the indication. For gallstone dissolution, the usual dose is 8-10 mg/kg
    //             body weight per day, divided into two to three doses. In the treatment of primary biliary
    //             cholangitis (PBC), the typical dose ranges from 13-15 mg/kg body weight per day, also
    //             divided into multiple doses.
    //           </li>
    //         </ul>

//             <h5 className="font-bold text-lg mb-3">Side Effects of UDILIV 300MG TABLET 15'S</h5>
//             <span className="bg-gray-100 p-2 rounded block mb-4">
//               Common Side Effects of UDILIV 300MG TABLET 15'S
//             </span>
//             <ul className="list-disc ml-6 mb-4">
//               <li>Diarrhea</li>
//               <li>Abdominal discomfort</li>
//               <li>Nausea</li>
//               <li>Vomiting</li>
//               <li>Hair loss (rare)</li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Section - Generic Medicine Alternatives */}
//         <div>
//           <h6 className="font-bold text-lg mb-4">Generic Medicine Alternatives</h6>
//           <div className="space-y-4">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between bg-gray-100 p-4 rounded shadow"
//               >
//                 <img
//                   src="./images/tablet.png"
//                   alt="Tablet"
//                   className="w-20 bg-white rounded"
//                 />
//                 <div className="ml-4">
//                   <h6 className="text-base font-semibold">DOLOWIN PLUS TAB</h6>
//                   <small className="text-gray-600 block">Micro Labs Limited</small>
//                   <p className="text-gray-600 mb-1">Paracetamol 650</p>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-sm line-through">Rs.95</span>
//                     <span className="text-sm font-bold">Rs.34</span>
//                     <span className="text-xs bg-blue-200 text-green-800 px-2 py-1 rounded">
//                       75% less Price
//                     </span>
//                   </div>
//                 </div>
//                 <button className="btn bg-gray-200 btn-outline-primary rounded-full px-4">+ Add</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;



import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddMedicine = async (medicine) => {
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/medicine`, medicine);
      alert("Medicine added successfully!");
    } catch (err) {
      setError("Failed to add medicine");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 flex items-center">
        <span className="text-xl">
          <i className="bi bi-chevron-left"></i>
        </span>
        <span className="ml-2 font-bold text-lg">Paracetamol/acetaminophen</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Medicine Details */}
        <div className="md:col-span-2">
          <div className="text-center font-semibold text-sm bg-gray-100 p-3 rounded mb-4">
            Medicine Details
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h5 className="font-bold text-lg mb-3">About UDILIV 300MG TABLET 15'S</h5>
            <p className="mb-4">
              UDILIV 300MG TABLET 15'S (UDCA) is naturally occurring bile acid derived from bear bile,
              and it is also produced synthetically. It has been used for several decades as a
              therapeutic agent to manage various liver disorders. UDCA is primarily known for its
              hepatoprotective properties and is used in the treatment of gallstones, primary biliary
              cholangitis (PBC), and other cholestatic liver conditions. This bile acid works by
              reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory
              effects.
            </p>

            <h5 className="font-bold text-lg mb-3">Uses of UDILIV 300MG TABLET 15'S</h5>
            <ul className="list-disc ml-6 mb-4">
              <li>Helps in dissolving gallstones</li>
              <li>Used in the treatment of primary biliary cholangitis (PBC)</li>
              <li>Aids in managing other cholestatic liver disorders</li>
              <li>Can be used to prevent gallstone formation</li>
            </ul>

            <h5 className="font-bold text-lg mb-3">How UDILIV 300MG TABLET 15'S Works</h5>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Dosage for children: The dosage of UDILIV 300MG TABLET 15'S for children depends on
                their body weight and the specific liver disorder being treated. It is typically
                prescribed by a pediatrician or gastroenterologist who will determine the appropriate
                dosage.
              </li>
              <li>
                Dosage for adults: The recommended dosage of UDILIV 300MG TABLET 15'S for adults varies
                depending on the indication. For gallstone dissolution, the usual dose is 8-10 mg/kg
                body weight per day, divided into two to three doses. In the treatment of primary biliary
                cholangitis (PBC), the typical dose ranges from 13-15 mg/kg body weight per day, also
                divided into multiple doses.
              </li>
            </ul>
            </div>
            </div>

        <div>
          <h6 className="font-bold text-lg mb-4">Generic Medicine Alternatives</h6>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => {
              const sampleMedicine = {
                name: "DOLOWIN PLUS TAB",
                generic_name: "Paracetamol 650",
                manufacturer: "Micro Labs Limited",
                price: 34,
                discount_price: 95,
              };

              return (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded shadow">
                  <img src="./images/tablet.png" alt="Tablet" className="w-20 bg-white rounded" />
                  <div className="ml-4">
                    <h6 className="text-base font-semibold">{sampleMedicine.name}</h6>
                    <small className="text-gray-600 block">{sampleMedicine.manufacturer}</small>
                    <p className="text-gray-600 mb-1">{sampleMedicine.generic_name}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm line-through">Rs.{sampleMedicine.discount_price}</span>
                      <span className="text-sm font-bold">Rs.{sampleMedicine.price}</span>
                      <span className="text-xs bg-blue-200 text-green-800 px-2 py-1 rounded">
                        75% less Price
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn bg-gray-200 btn-outline-primary rounded-full px-4"
                    onClick={() => handleAddMedicine(sampleMedicine)}
                    disabled={loading}
                  >
                    {loading ? "Adding..." : "+ Add"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default MainPage;




// import React, { useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5000";

// const MainPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAddMedicine = async (medicine) => {
//     setLoading(true);
//     try {
//       await axios.post(`${BASE_URL}/medicine`, medicine);
//       alert("Medicine added successfully!");
//     } catch (err) {
//       setError("Failed to add medicine");
//     }
//     setLoading(false);
//   };

//   const sampleMedicine = {
//     name: "DOLOWIN PLUS TAB",
//     generic_name: "Paracetamol 650",
//     manufacturer: "Micro Labs Limited",
//     price: 34,
//     discount_price: 95,
//   };

//   return (
    // <div className="container mx-auto px-4">
    //   <div className="mb-4 flex items-center">
    //     <span className="text-xl">
    //       <i className="bi bi-chevron-left"></i>
    //     </span>
    //     <span className="ml-2 font-bold text-lg">Paracetamol/acetaminophen</span>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {/* Left Section - Medicine Details */}
    //     <div className="md:col-span-2">
    //       <div className="text-center font-semibold text-sm bg-gray-100 p-3 rounded mb-4">
    //         Medicine Details
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded shadow">
    //         <h5 className="font-bold text-lg mb-3">About UDILIV 300MG TABLET 15'S</h5>
    //         <p className="mb-4">
    //           UDILIV 300MG TABLET 15'S (UDCA) is naturally occurring bile acid derived from bear bile,
    //           and it is also produced synthetically. It has been used for several decades as a
    //           therapeutic agent to manage various liver disorders. UDCA is primarily known for its
    //           hepatoprotective properties and is used in the treatment of gallstones, primary biliary
    //           cholangitis (PBC), and other cholestatic liver conditions. This bile acid works by
    //           reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory
    //           effects.
    //         </p>

    //         <h5 className="font-bold text-lg mb-3">Uses of UDILIV 300MG TABLET 15'S</h5>
    //         <ul className="list-disc ml-6 mb-4">
    //           <li>Helps in dissolving gallstones</li>
    //           <li>Used in the treatment of primary biliary cholangitis (PBC)</li>
    //           <li>Aids in managing other cholestatic liver disorders</li>
    //           <li>Can be used to prevent gallstone formation</li>
    //         </ul>
    //       </div>
    //     </div>

//         {/* Right Section - Generic Medicine Alternatives */}
//         <div>
//           <h6 className="font-bold text-lg mb-4">Generic Medicine Alternatives</h6>
//           <div className="space-y-4">
//             <div className="flex items-center justify-between bg-gray-100 p-4 rounded shadow">
//               <img src="./images/tablet.png" alt="Tablet" className="w-20 bg-white rounded" />
//               <div className="ml-4">
//                 <h6 className="text-base font-semibold">{sampleMedicine.name}</h6>
//                 <small className="text-gray-600 block">{sampleMedicine.manufacturer}</small>
//                 <p className="text-gray-600 mb-1">{sampleMedicine.generic_name}</p>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-sm line-through">Rs.{sampleMedicine.discount_price}</span>
//                   <span className="text-sm font-bold">Rs.{sampleMedicine.price}</span>
//                   <span className="text-xs bg-blue-200 text-green-800 px-2 py-1 rounded">
//                     75% less Price
//                   </span>
//                 </div>
//               </div>
//               <button
//                 className="btn bg-gray-200 btn-outline-primary rounded-full px-4"
//                 onClick={() => handleAddMedicine(sampleMedicine)}
//                 disabled={loading}
//               >
//                 {loading ? "Adding..." : "+ Add"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {error && <div className="text-red-500 mt-4">{error}</div>}
//     </div>
//   );
// };

// export default MainPage; */}
