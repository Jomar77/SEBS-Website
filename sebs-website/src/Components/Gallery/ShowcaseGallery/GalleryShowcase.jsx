import React, { useState, useEffect } from "react";
import EventGallerySection from "./EventGallerySection";
import LatestEventSection from "./LatestEventSection";

export default function GalleryShowcase() {
  const [eventGalleries, setEventGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedEvent, setExpandedEvent] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SEBS_API_URL}/api/Public/event-galleries`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        // Sort by createdAt to get the latest event first
        const sortedEvents = (data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setEventGalleries(sortedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch event galleries:", error);
        setLoading(false);
      });
  }, []);

  const handleToggleEvent = (eventKey) => {
    setExpandedEvent(expandedEvent === eventKey ? null : eventKey);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-lg">
        Loading event galleries...
      </div>
    );
  }

  if (eventGalleries.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-gray-500">
        No event galleries available.
      </div>
    );
  }

  // Separate latest event from the rest
  const latestEvent = eventGalleries[0];
  const olderEvents = eventGalleries.slice(1);

  return (
    <>
      {/* Latest Event Section with special styling */}
      {latestEvent && (
        <LatestEventSection
          event={latestEvent}
          expandedEvent={expandedEvent}
          onToggle={handleToggleEvent}
          eventKey={`event-${latestEvent.eventGalleryId}`}
          loading={loading}
        />
      )}

      {/* Older Events */}
      {olderEvents.map((event, index) => (
        <EventGallerySection
          key={event.eventGalleryId}
          event={event}
          expandedEvent={expandedEvent}
          onToggle={handleToggleEvent}
          eventKey={`event-${event.eventGalleryId}`}
          useWaveBackground={index % 2 === 1}
        />
      ))}
    </>
  );
}