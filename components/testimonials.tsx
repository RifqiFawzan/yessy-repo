"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Cutie Lya",
    reviewText: "Nice enviroment. Clean. Delicious and affordable food. Spicy level is to our liking as our level of spicy is very high. Friendly and very comedian staffs including the boss entertaining serving you. Definitely feel welcoming. Recommended to dine here.",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  },
  {
    id: 2,
    name: "Hadi Cahyadi",
    reviewText: "Unexpected gem in sleepy Senggigi, just 250 m from Sheraton Senggigi. A humble old-school establishment and true hidden spot for grilled fish. We were lucky to get very fresh grill baronang (rabbitfish), ayam Taliwang, plecing kangkung, and crispy fried sea shrimp – all cooked with authentic Lombok flavors. Service by Pak Said was warm and attentive. A must-visit when you are in Senggigi.",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  },
  {
    id: 3,
    name: "Naomi Shorter",
    reviewText: "The waiter was very efficient and has a good sense of humour. The food was very good. Fresh ingredients, hot and presented beautifully. We will be revisiting as it great value for money in a clean and welcoming environment.",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  },
  {
    id: 4,
    name: "Raluca",
    reviewText: "We had an incredible dining experience that we still raving about! The tiger shrimp were absolutely amazing, cooked to perfection with a delightful flavor that exploded in our mouths. Also, we ordered the grilled fish XL size, which was so fresh and delicious, a true seafood lover's dream. And let's not forget the papaya salads, which were a refreshing and flavorful complement to the meal. The service was top-notch, with friendly and attentive staff making the whole experience unforgettable. Thank you for the experience!",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  },
  {
    id: 5,
    name: "Carizza Bordeos",
    reviewText: "Very lovely lunch. Generous in servings and the service is amazing! Owners are very personable and looked after us really well. THANK YOU!",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  },
  {
    id: 6,
    name: "Sohail Ahmed Siddiqui",
    reviewText: "A hidden gem in Lombok, we came with a group of 6 just before christmas and were surprised with the location and food... nothing tops sitting by the sea and enjoying fresh grilled seafood.",
    rating: 5,
    location: "Yessy Cafe Senggigi"
  }
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brown/5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-12 h-px bg-sand"></span>
            <span className="text-camel text-sm tracking-widest uppercase font-semibold">Testimonials</span>
            <span className="block w-12 h-px bg-sand"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4">
            What Our Guests Say
          </h2>
          <p className="text-brown/80 max-w-2xl mx-auto text-sm sm:text-base">
            Real reviews from our Google Maps customers across all our locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sand/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group flex flex-col h-full cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating />
                <span className={cn(
                  "text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full",
                  review.location.includes("Senggigi") 
                    ? "bg-camel/10 text-camel border border-camel/20" 
                    : "bg-brown/10 text-brown border border-brown/20"
                )}>
                  {review.location}
                </span>
              </div>
              
              <p className={cn(
                "text-darkbrown/80 text-sm sm:text-base leading-relaxed italic mb-6 flex-1 transition-all",
                expandedId === review.id ? "line-clamp-none" : "line-clamp-4 md:group-hover:line-clamp-none"
              )}>
                &quot;{review.reviewText}&quot;
              </p>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-sand/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand to-camel flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-darkbrown text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-brown/60">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

