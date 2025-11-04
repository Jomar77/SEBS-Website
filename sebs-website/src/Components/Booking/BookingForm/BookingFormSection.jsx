import React, { useState } from "react";

const BookingFormSection = ({ onSubmit, selectedService, selectedDate }) => {
  const [duration, setDuration] = useState(1);
  const [payment, setPayment] = useState("Bank Transfer");
  const [form, setForm] = useState({
    email: "",
    name: "",
    contact: "",
    address: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!form.email || !form.name || !form.contact || !form.address || !form.time) {
      alert("Please fill in all required fields.");
      return;
    }
    
    if (!selectedService?.id) {
      alert("Please select a service first.");
      return;
    }
    
    if (!selectedDate) {
      alert("Please select an event date.");
      return;
    }
    e.preventDefault();
    onSubmit({ ...form, duration, payment, selectedDate });
  };

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "No date selected";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
  <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Booking Overview */}
  <div className="md:w-1/2 w-full p-16 border-r border-gray-300 flex flex-col justify-start">
        <h2 className="font-corben-reg text-4xl text-[#fb8950] mb-2">Booking Overview</h2>
        <p className="font-corben-reg text-[#204558] mb-6">
          This is your order summary where you can edit and delete your order and select your preferred delivery type.
        </p>
        {/* Package Card */}
        <div className="border border-[#204558] p-4 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {selectedService?.imageUrl ? (
              <img
                src={selectedService.imageUrl}
                alt={selectedService.imageAlt || selectedService.title || "Service image"}
                className="w-32 h-24 object-cover rounded"
                loading="lazy"
              />
            ) : (
              <div className="bg-orange-200 w-32 h-24 rounded" />
            )}
            <div>
              <div className="text-lg font-medium text-[#0e465a]">
                {selectedService?.title || "No service selected"}
              </div>
              <div className="text-[#0e465a]">
                {selectedService?.desc || "Per Event"}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold text-[#0e465a]">
              ${selectedService?.basePrice || "$0"}
            </div>
            <div className="text-[#0e465a]">
              {/* Only show 'per event' if desc is not present or is 'per event' */}
              {(!selectedService?.desc || selectedService?.desc.toLowerCase().includes("event")) ? "per event" : selectedService?.desc}
            </div>
          </div>
        </div>
        
        {/* Selected Date Display */}
        <div className="border border-[#204558] p-4 mb-6">
          <div className=" text-lg font-semibold text-[#0e465a] mb-2">Event Date</div>
          <div className="text-xl text-[#79803c] font-medium">
            {formatDate(selectedDate)}
          </div>
        </div>
        {/* Hire Duration */}
        <div className="mb-6">
          <label className="font-semibold text-[#0e465a] mb-2 block">Hire Duration / hour</label>
          <select
            className="w-full border border-[#204558] p-2 text-2xl text-[#79803c] text-center focus:outline-none"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
            {[1,2,3,4,5,6,7,8].map(hr => (
              <option key={hr} value={hr}>{hr}</option>
            ))}
          </select>
        </div>
        {/* Payment Options */}
        <div>
          <label className="font-semibold text-[#0e465a] mb-2 block">Payment Options</label>
          <div className="border border-[#204558] p-4 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-lg text-slate-800">
              <input
                type="radio"
                name="payment"
                value="Bank Transfer"
                checked={payment === "Bank Transfer"}
                onChange={() => setPayment("Bank Transfer")}
                className="radio"
                style={{ accentColor: '#79803c' }}
              />
              Bank Transfer
            </label>
            <label className="flex items-center gap-2 text-lg text-slate-800">
              <input
                type="radio"
                name="payment"
                value="Cash"
                checked={payment === "Cash"}
                onChange={() => setPayment("Cash")}
                className="radio"
                style={{ accentColor: '#79803c' }}
              />
              Cash
            </label>
          </div>
        </div>
      </div>
      {/* Details Form */}
      <div className="md:w-1/2 w-full p-16 flex flex-col justify-start">
        <h2 className="text-4xl font-corben-reg text-[#ffc571] mb-4">Details</h2>
        <p className="font-corben-reg text-[#204558] mb-6 pb-4">Fill in your payment details and complete the order.</p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#204558] mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-[#204558] bg-transparent p-2 focus:outline-none"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[#204558] mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border-b border-[#204558] bg-transparent p-2 focus:outline-none"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[#204558] mb-1">Contact No.</label>
            <input
              type="text"
              className="w-full border-b border-[#204558] bg-transparent p-2 focus:outline-none"
              value={form.contact}
              onChange={e => setForm({ ...form, contact: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[#204558] mb-1">Event Address</label>
            <input
              type="text"
              className="w-full border-b border-[#204558] bg-transparent p-2 focus:outline-none"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[#204558] mb-1">Time of Event</label>
            <input
              type="text"
              className="w-full border-b border-[#204558] bg-transparent p-2 focus:outline-none"
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
            />
          </div>
          <button type="submit" className="mt-1 py-2 w-full rounded-xl bg-[#f0a7c2] text-white font-semibold rounded-md hover:bg-base-200 hover:text-[#f0a7c2] transition duration-200">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormSection;