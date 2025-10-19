import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";
import WavePattern from "../Common/WavePattern";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboardList, 
  faRibbon, 
  faCalendarDays, 
  faClock, 
  faLocationDot, 
  faDollarSign, 
  faCheckCircle,
  faCopy,
  faCheck,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';

export default function BookingSuccess() {
  const { booking } = useBooking();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const receiptRef = useRef(null);

  const handleCopyBookingNumber = async () => {
    if (booking.bookingReference) {
      try {
        await navigator.clipboard.writeText(booking.bookingReference);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy booking number:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = booking.bookingReference;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleDownloadReceipt = async () => {
    if (!receiptRef.current) return;
    
    setDownloading(true);
    try {
      const canvas = await html2canvas(receiptRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        ignoreElements: (element) => {
          // Skip elements that might cause color parsing issues
          return element.classList?.contains('animate-bounce') || false;
        },
        onclone: (clonedDoc) => {
          // Force all DaisyUI classes to use explicit colors
          const clonedElement = clonedDoc.querySelector('[data-theme]');
          if (clonedElement) {
            clonedElement.removeAttribute('data-theme');
          }
        }
      });
      
      // Create download link
      const link = document.createElement('a');
      link.download = `SEBS-Booking-Receipt-${booking.bookingReference || new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL();
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download receipt:', error);
      alert('Sorry, there was an issue downloading your receipt. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <WavePattern />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen py-12">

        {/* Receipt Card */}
        <div ref={receiptRef} className="bg-white w-full max-w-md rounded-xl shadow-lg border border-dashed border-[#a8a29e] px-8 py-10 flex flex-col gap-6">
          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="font-yeseva text-2xl text-[#204558] tracking-wide mb-1">Booking Receipt</h2>
            <div className="text-xs text-[#a8a29e]">{new Date().toLocaleString()}</div>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold" style={{ color: '#374151' }}>Business name:</span>
              <span className="text-[#79803c]">SEBS Event Planning</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold" style={{ color: '#374151' }}>Email:</span>
              <span className="text-[#79803c]">{booking.form?.email || "your email"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold" style={{ color: '#374151' }}>Phone Number:</span>
              <span className="text-[#79803c]">{booking.form?.contact || "your phone"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold" style={{ color: '#374151' }}>Booking Date:</span>
              <span className="text-[#79803c]">
                {booking.date ? booking.date.toLocaleDateString('en-US') : "your selected date"}
              </span>
            </div>
          </div>

          {/* Booking Reference */}
          {booking.bookingReference && (
            <div className="flex justify-between items-center py-2 border-y border-dashed border-[#e5aac3]">
              <span className="font-semibold" style={{ color: '#374151' }}>Booking Number:</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[#79803c] font-bold text-2xl tracking-widest">
                  {booking.bookingReference}
                </span>
                <button
                  onClick={handleCopyBookingNumber}
                  className={`p-2 rounded-md transition-all duration-200`}
                  style={{
                    backgroundColor: copied ? '#dcfce7' : '#efaac3',
                    color: copied ? '#16a34a' : '#ffffff'
                  }}
                  title={copied ? 'Copied!' : 'Copy booking number'}
                >
                  <FontAwesomeIcon 
                    icon={copied ? faCheck : faCopy} 
                    className="text-sm"
                  />
                </button>
              </div>
            </div>
          )}

          {/* Personalized Message */}
          <div className="text-sm italic" style={{ color: '#374151' }}>
            Dear <span className="font-semibold">{booking.form?.name || "Valued Customer"}</span>,<br />
            We thank you for choosing <span className="font-semibold">SEBS Event Planning</span>.<br />
            Below are your booking details.
          </div>

          {/* Service Details Table */}
          <div className="w-full">
            <table className="w-full text-sm border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="text-left font-yeseva text-[#204558] pb-2">Service</th>
                  <th className="text-left font-yeseva text-[#204558] pb-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faRibbon} className="text-xl text-[#fb8950]" />
                    Service Booked
                  </td>
                  <td className="text-[#79803c]">{booking.service?.title || "your Selected Service"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-xl text-[#ffc571]" />
                    Event Date
                  </td>
                  <td className="text-[#79803c]">
                    {booking.date ? booking.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    }) : "your selected date"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-xl text-[#efaac3]" />
                    Event Time
                  </td>
                  <td className="text-[#79803c]">{booking.form?.time || "to be confirmed"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xl text-[#8fc2c3]" />
                    Venue
                  </td>
                  <td className="text-[#79803c]">
                    {booking.form?.address || booking.bookingResponse?.eventDetails?.location || "to be confirmed"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faDollarSign} className="text-xl text-[#fb8950]" />
                    Total Amount
                  </td>
                  <td className="font-semibold text-[#79803c]">{booking.service?.price || "to be quoted"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-xl text-[#ffc571]" />
                    Status
                  </td>
                  <td className="text-[#79803c]">
                    {booking.bookingResponse?.status === 1 ? "Awaiting Confirmation" : "Pending Review"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="text-center font-medium pt-4 border-t border-dashed border-[#e5aac3]" style={{ color: '#374151' }}>
            Thank you for trusting us.<br />We look forward to being part of your celebration!
          </div>
        </div>

        {/* Contact Information & Action Button */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p className="mb-2">We'll contact you shortly to confirm the details and arrange payment.</p>
          <p>You should receive a confirmation email at <span className="font-semibold">{booking.form?.email || "your email address"}</span></p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button
            onClick={handleDownloadReceipt}
            disabled={downloading}
            className="btn border-none px-8"
            style={{
              backgroundColor: downloading ? '#9ca3af' : '#efaac3',
              color: '#ffffff',
              cursor: downloading ? 'not-allowed' : 'pointer'
            }}
          >
            <FontAwesomeIcon 
              icon={faDownload} 
              className={`mr-2 ${downloading ? 'animate-bounce' : ''}`}
            />
            {downloading ? 'Downloading...' : 'Download Receipt'}
          </button>
          <Link 
            to="/" 
            className="btn border-none px-8"
            style={{ backgroundColor: '#79803c', color: '#ffffff' }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}