import React from "react";

const MedicationCard = () => {
  const cardData = [
    {
      title: "Dolo 650 mg",
      manufacturer: "By MICRO LABS LIMITED",
      genericName: "Paracetamol 650 mg",
      price: "Rs.534",
      originalPrice: "Rs.34",
      discount: "15% Off",
      chemical: "CH02 || CH02",
      rating: 4.0,
      off: "15%",
      reviews: [
        "The medicine is good but a bit costly compared to the exact generic medicine",
        "The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 2",
      manufacturer: "By XYZ Labs",
      genericName: "Generic Name 2",
      price: "Rs.450",
      originalPrice: "Rs.24",
      discount: "10% Off",
      chemical: "CH02 || CH03",
      rating: 3.5,
      off: "15%",
      reviews: [
        "The medicine is good but a bit costly compared to the exact generic medicine",
        "The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 3",
      manufacturer: "By ABC Pharmaceuticals",
      genericName: "Generic Name 3",
      price: "Rs.600",
      originalPrice: "Rs.17",
      discount: "20% Off",
      chemical: "CH04 || CH05",
      rating: 4.5,
      off: "15%",
      reviews: [
        "The medicine is good but a bit costly compared to the exact generic medicine",
        "The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 4",
      manufacturer: "By DEF Medications",
      genericName: "Generic Name 4",
      price: "Rs.700",
      originalPrice: "Rs.90",
      discount: "5% Off",
      chemical: "CH06 || CH07",
      rating: 3.0,
      off: "15%",
      reviews: [
        "The medicine is good but a bit costly compared to the exact generic medicine",
        "The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h4 className="font-bold text-lg mb-1">Compare Medicine</h4>
        <span className="text-sm text-gray-600">Compare Medicines price composition to make your decision</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border p-4">
            {/* Medication Image */}
            <div className="bg-gray-100 rounded-md mb-4 flex justify-center items-center h-40">
              <img
                src={card.imageUrl}
                className="object-contain h-24"
                alt={card.title}
              />
            </div>

            {/* Card Content */}
            <h5 className="font-bold text-base mb-2">{card.title}</h5>
            <p className="text-sm text-gray-600 mb-3">{card.manufacturer}</p>

            <div className="text-sm text-gray-600 mb-2">
              <small className="block font-medium">Generic Name:</small>
              <p>{card.genericName}</p>
            </div>

            <div className="text-sm text-gray-600 mb-2">
              <small className="block font-medium">Average Price:</small>
              <p>{card.price}</p>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-3">
              <small className="text-gray-600">{card.off}</small>
              <span className="font-bold">{card.originalPrice}</span>
            </div>

            <div className="text-sm text-gray-600 mb-3">
              <small className="block font-medium">Chemical formation:</small>
              <p>{card.chemical}</p>
            </div>

            <div className="text-sm text-gray-600 mb-2">
              <small className="block font-medium">Ratings & Reviews</small>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className={`bi bi-star${idx < card.rating ? "-fill" : ""}`}></i>
                  ))}
                </div>
                <span className="bg-gray-100 text-gray-700 rounded px-2 text-xs">{card.rating}</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {card.reviews.map((review, idx) => (
                <p key={idx} className="mb-1">{review}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationCard;
