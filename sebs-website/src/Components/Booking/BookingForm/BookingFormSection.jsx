import React, { useState } from "react";

const BookingFormSection = ({ onSubmit }) => {
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
    onSubmit({ ...form, duration, payment });
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Booking Overview */}
      <div className="md:w-1/2 w-full p-16 border-r border-gray-300 flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-orange-500 mb-2">Booking Overview</h2>
        <p className="text-base text-slate-700 mb-6">
          This is your order summary where you can edit and delete your order and select your preferred delivery type.
        </p>
        {/* Package Card */}
        <div className="border p-4 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-slate-100 w-32 h-24" />
            <div>
              <div className="text-lg font-medium text-slate-800">Package A</div>
              <div className="text-base text-slate-700">October 15 2025</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold text-slate-800">$500</div>
            <div className="text-base text-slate-700">per hour</div>
          </div>
        </div>
        {/* Hire Duration */}
        <div className="mb-6">
          <label className="font-semibold text-slate-800 mb-2 block">Hire Duration / hour</label>
          <select
            className="w-full border p-2 text-2xl text-center focus:outline-none"
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
          <label className="font-semibold text-slate-800 mb-2 block">Payment Options</label>
          <div className="border p-4 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-lg text-slate-800">
              <input
                type="radio"
                name="payment"
                value="Bank Transfer"
                checked={payment === "Bank Transfer"}
                onChange={() => setPayment("Bank Transfer")}
                className="radio radio-primary"
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
                className="radio radio-primary"
              />
              Cash
            </label>
          </div>
        </div>
      </div>
      {/* Details Form */}
      <div className="md:w-1/2 w-full p-16 flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-yellow-400 mb-2">Details</h2>
        <p className="text-base text-slate-700 mb-6">Fill in your payment details and complete the order.</p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-slate-800 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-slate-800 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-slate-800 mb-1">Contact No.</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none"
              value={form.contact}
              onChange={e => setForm({ ...form, contact: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-slate-800 mb-1">Event Address</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-slate-800 mb-1">Time of Event</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none"
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
            />
          </div>
          <button type="submit" className="btn w-full bg-pink-300 text-white text-xl rounded-xl mt-4 hover:bg-pink-400 border-none">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormSection;