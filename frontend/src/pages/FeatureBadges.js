import React from 'react';

const FeatureBadges = () => {
  const features = [
    {
      image: "/images/mobile.png", 
      title: "Safe and Secured",
      subtitle: "Payment"
    },
    {
      image: "/images/hands.png",
      title: "100% Authentic",
      subtitle: "Products"
    },
    {
      image: "/images/Like.png",
      title: "5 Lac + Happy",
      subtitle: "Customers"
    }
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {features.map((feature, index) => (
            <div key={index} className="text-center relative">
              <div className="flex justify-center mb-3">
                <img src={feature.image} alt={feature.title} className="w-16 h-16" />
              </div>
              <div className="text-gray-800">
                <h6 className="text-lg font-semibold mb-1">{feature.title}</h6>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBadges;
