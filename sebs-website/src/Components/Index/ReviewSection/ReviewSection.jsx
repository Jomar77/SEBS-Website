import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ServiceSteps from "./ServiceSteps";

// Replace with your Google Place ID and API Key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID";
const API_KEY = "YOUR_GOOGLE_API_KEY";
const GOOGLE_REVIEWS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch Google Maps reviews
    fetch(GOOGLE_REVIEWS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews.slice(0, 2)); // Show top 2 reviews
        }
      });
  }, []);

  return (
    <section className="bg-base-300 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        love our services?
      </h2>
      <div className="max-w-2xl mx-auto">
        {reviews.map((review, i) => (
          <ReviewCard
            key={i}
            name={review.author_name}
            date={new Date(review.time * 1000).toLocaleDateString()}
            text={review.text}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://www.google.com/maps/place/?q=place_id:YOUR_GOOGLE_PLACE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Leave a review
        </a>
      </div>

      <ServiceSteps />
    </section>
  );
}
