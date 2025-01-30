import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all medicines
  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/compare_medicines`);
      setMedicines(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch medicines");
      setLoading(false);
    }
  };

  // Fetch medicine details
  const fetchMedicineDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/medicine/${id}`);
      setSelectedMedicine(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch medicine details");
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${BASE_URL}/medicine`, {
  //       name: "New Medicine",
  //       generic_name: "Generic Name",
  //       price: 19.99,
  //       // Include other fields
  //     });
  //     fetchMedicines(); // Refresh the list
  //   } catch (err) {
  //     setError("Failed to add medicine");
  //   }
  // };

  useEffect(() => {
    fetchMedicines();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Medicine Comparison</h2>

      {/* Medicine List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white shadow rounded p-4 cursor-pointer"
            onClick={() => fetchMedicineDetails(medicine.id)}
          >
            <h3 className="text-lg font-semibold">{medicine.name}</h3>
            <p className="text-gray-600">{medicine.generic_name}</p>
            <p className="text-gray-600">Price: {medicine.price}</p>
          </div>
        ))}
      </div>

      {/* Medicine Details */}
      {selectedMedicine && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{selectedMedicine.name}</h2>
          <p className="mb-2">{selectedMedicine.description}</p>
          <h3 className="text-lg font-semibold mb-1">Uses:</h3>
          <p>{selectedMedicine.uses}</p>
          <h3 className="text-lg font-semibold mb-1">How It Works:</h3>
          <p>{selectedMedicine.how_it_works}</p>
        </div>
      )}
    </div>
  );
};

export default App;
