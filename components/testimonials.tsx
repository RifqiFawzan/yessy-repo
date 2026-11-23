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
            i < rating ? "text-amber-600 fill-amber-500" : "text-border fill-transparent"
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
    <section aria-labelledby="reviews-heading" className="py-16 sm:py-24 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14 border-b border-border pb-6">
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              Guest Reviews
            </p>
            <h2 id="reviews-heading" className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              What Guests Shared
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            Guest reviews from Google Maps for Yessy Cafe Senggigi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => {
            const isExpanded = expandedId === review.id;
            const isLong = review.reviewText.length > 180;
            const textId = `review-body-${review.id}`;

            return (
              <article
                key={review.id}
                className="bg-card text-card-foreground rounded-2xl p-6 sm:p-7 border border-border shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <StarRating rating={review.rating} />
                    <span className="text-xs font-semibold text-muted-foreground">
                      {review.location}
                    </span>
                  </div>

                  <blockquote
                    id={textId}
                    className={cn(
                      "text-card-foreground/90 text-sm sm:text-base leading-relaxed mb-4",
                      !isExpanded && isLong && "line-clamp-4"
                    )}
                  >
                    &ldquo;{review.reviewText}&rdquo;
                  </blockquote>

                  {isLong && (
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : review.id)}
                      aria-expanded={isExpanded}
                      aria-controls={textId}
                      className="min-h-[44px] inline-flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4 mb-2"
                    >
                      {isExpanded ? "Show less" : "Read full review"}
                    </button>
                  )}
                </div>

                <footer className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center font-bold text-sm shrink-0"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-card-foreground text-sm sm:text-base">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">Google Maps Review</p>
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
