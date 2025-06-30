import React from "react";

const MyShipment = () => {
  // Dummy shipment data
  const shipments = [
    {
      id: "SHIP12345",
      product: "Wireless Headphones",
      status: "In Transit",
      location: "Lahore, Pakistan",
      estimatedDelivery: "2025-07-01",
    },
    {
      id: "SHIP67890",
      product: "Smartwatch",
      status: "Delivered",
      location: "Karachi, Pakistan",
      estimatedDelivery: "2025-06-25",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">My Shipments</h1>

        {shipments.length === 0 ? (
          <p className="text-center text-gray-500">You have no shipments yet.</p>
        ) : (
          <div className="space-y-6">
            {shipments.map((shipment) => (
              <div
                key={shipment.id}
                className="border border-orange-300 p-4 rounded-lg bg-orange-50 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-orange-700 mb-2">
                  {shipment.product}
                </h2>
                <p><strong>Shipment ID:</strong> {shipment.id}</p>
                <p><strong>Status:</strong> {shipment.status}</p>
                <p><strong>Current Location:</strong> {shipment.location}</p>
                <p><strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyShipment;
