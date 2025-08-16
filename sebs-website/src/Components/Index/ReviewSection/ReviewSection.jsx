import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ServiceSteps from "./ServiceSteps";

// Replace with your Google Place ID and API Key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID";
const API_KEY = "YOUR_GOOGLE_API_KEY";
const GOOGLE_REVIEWS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   // Fetch Google Maps reviews
  //   fetch(GOOGLE_REVIEWS_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.result && data.result.reviews) {
  //         setReviews(data.result.reviews.slice(0, 2)); // Show top 2 reviews
  //       }
  //     });
  // }, []);

  //hello gab
  return (
    <section className="flex flex-col bg-base-100 pt-10 gap-8">
      <div>
        <h2 className="text-6xl font-corben-reg text-center mb-8 text-[#204558]">
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#f0a7c2] text-white font-semibold rounded-md hover:bg-white hover:text-[#f0a7c2] transition duration-200"
          >
            Leave a review
          </a>
        </div>
      </div>

      <ServiceSteps />
    </section>
  );
}
