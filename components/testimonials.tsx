"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Cutie Lya",
    reviewText:
      "Nice enviroment. Clean. Delicious and affordable food. Spicy level is to our liking as our level of spicy is very high. Friendly and very comedian staffs including the boss entertaining serving you. Definitely feel welcoming. Recommended to dine here.",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
  {
    id: 2,
    name: "Hadi Cahyadi",
    reviewText:
      "Unexpected gem in sleepy Senggigi, just 250 m from Sheraton Senggigi. A humble old-school establishment and true hidden spot for grilled fish. We were lucky to get very fresh grill baronang (rabbitfish), ayam Taliwang, plecing kangkung, and crispy fried sea shrimp – all cooked with authentic Lombok flavors. Service by Pak Said was warm and attentive. A must-visit when you are in Senggigi.",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
  {
    id: 3,
    name: "Naomi Shorter",
    reviewText:
      "The waiter was very efficient and has a good sense of humour. The food was very good. Fresh ingredients, hot and presented beautifully. We will be revisiting as it great value for money in a clean and welcoming environment.",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
  {
    id: 4,
    name: "Raluca",
    reviewText:
      "We had an incredible dining experience that we still raving about! The tiger shrimp were absolutely amazing, cooked to perfection with a delightful flavor that exploded in our mouths. Also, we ordered the grilled fish XL size, which was so fresh and delicious, a true seafood lover's dream. And let's not forget the papaya salads, which were a refreshing and flavorful complement to the meal. The service was top-notch, with friendly and attentive staff making the whole experience unforgettable. Thank you for the experience!",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
  {
    id: 5,
    name: "Carizza Bordeos",
    reviewText:
      "Very lovely lunch. Generous in servings and the service is amazing! Owners are very personable and looked after us really well. THANK YOU!",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
  {
    id: 6,
    name: "Sohail Ahmed Siddiqui",
    reviewText:
      "A hidden gem in Lombok, we came with a group of 6 just before christmas and were surprised with the location and food... nothing tops sitting by the sea and enjoying fresh grilled seafood.",
    rating: 5,
    location: "Yessy Cafe Senggigi",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className={cn(
            "w-4 h-4",
            i < rating ? "text-amber-500 fill-amber-500" : "text-sand fill-transparent"
          )}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="guests-say-heading"
      className="py-16 sm:py-24 sand-grain-surface border-y border-sand overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-12 h-px bg-camel"></span>
            <span className="text-brown text-sm tracking-widest uppercase font-bold">Testimonials</span>
            <span className="block w-12 h-px bg-camel"></span>
          </div>
          <h2
            id="guests-say-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4"
          >
            What Our Guests Say
          </h2>
          <p className="text-brown max-w-2xl mx-auto text-sm sm:text-base">
            Guest reviews from Google Maps for Yessy Cafe Senggigi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => {
            const isExpanded = expandedId === review.id;
            const isLong = review.reviewText.length > 180;
            const quoteId = `guest-quote-${review.id}`;

            return (
              <article
                key={review.id}
                className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-sm border border-sand/70 hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-2 mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream text-brown border border-sand">
                    {review.location}
                  </span>
                </div>

                <blockquote
                  id={quoteId}
                  className={cn(
                    "text-darkbrown text-sm sm:text-base leading-relaxed italic mb-3 flex-1",
                    !isExpanded && isLong && "line-clamp-4"
                  )}
                >
                  &ldquo;{review.reviewText}&rdquo;
                </blockquote>

                {isLong && (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : review.id)}
                      aria-expanded={isExpanded}
                      aria-controls={quoteId}
                      className="cursor-pointer min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-brown hover:text-darkbrown underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-camel rounded"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>
                )}

                <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-sand/50">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-sand/70 flex items-center justify-center text-darkbrown font-bold text-sm shrink-0"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-darkbrown text-sm sm:text-base">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brown">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Google Review
                    </div>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
