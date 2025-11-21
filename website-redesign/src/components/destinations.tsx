"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Miami",
    location: "Florida",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "New York City",
    location: "New York",
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "The Bahamas",
    location: "Caribbean",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2076&auto=format&fit=crop",
  },
  {
    name: "Vail",
    location: "Colorado",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "The Hamptons",
    location: "New York",
    image: "destinations/hamptons.webp",
  },
  {
    name: "Turks and Caicos",
    location: "Caribbean",
    image: "destinations/turks.jpg",
  },
  {
    name: "Chicago",
    location: "Illinois",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2088&auto=format&fit=crop",
  },
  {
    name: "Nashville",
    location: "Tennessee",
    image: "destinations/nashville.avif",
  },
];

function DestinationCard({ destination, index }: { destination: typeof destinations[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const delay = index * 100;

  return (
    <div
      ref={cardRef}
      className={`group relative h-80 overflow-hidden transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-serif text-3xl font-light mb-1">{destination.name}</h3>
        <p className="text-sm font-light tracking-wider uppercase opacity-90">{destination.location}</p>
      </div>
    </div>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#0a1628]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-white/60 mb-4">
            Where We Fly
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6 text-white">
            Popular <span className="italic">Destinations</span>
          </h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            Serving over 300 airports, including international destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.name} destination={destination} index={index} />
            ))}
          </div>
        </div>

        {/* Get a Quote Button */}
        <div className="flex justify-center mt-20">
          <Button size="lg" className="px-10 py-7 text-lg bg-white text-foreground hover:bg-white/90">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
