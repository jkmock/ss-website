"use client";

import { Button } from "@/components/ui/button";
import { Gauge, MapPin, DollarSign, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fleet = [
  {
    name: "Citation CJ1",
    image: "CJ1/cj1-background.png",
    range: "1,200 nm",
    speed: "415 mph",
    passengers: "4-5",
    price: "$3,500/hr",
    description: "Ideal for short regional flights with efficiency and comfort for up to 5 passengers.",
  },
  {
    name: "Citation CJ3",
    image: "CJ3/CJ3-background.png",
    range: "1,500 nm",
    speed: "480 mph",
    passengers: "6-7",
    price: "$4,200/hr",
    description: "Enjoy a more spacious cabin and complementary in-flight WIFI. Take advantage of increased speed and range.",
  },
];

function JetCard({ jet, index }: { jet: typeof fleet[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress * 80);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative h-[750px] overflow-hidden group"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <img
          src={jet.image}
          alt={jet.name}
          className="h-full w-full object-cover scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content Overlay with Float Animation */}
      <div
        className={`relative h-full flex flex-col justify-end p-8 md:p-12 transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Subtle darkening behind text */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent -z-10" />
        {/* Aircraft Type */}
        <h3 className={`font-serif text-4xl md:text-5xl font-light text-white mb-6 transition-all duration-700 delay-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          {jet.name}
        </h3>

        {/* Description */}
        <p className={`text-white font-light leading-relaxed mb-8 max-w-md transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          {jet.description}
        </p>

        {/* Specifications */}
        <div className={`flex gap-6 mb-8 pb-8 border-b border-white/20 transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <div className="flex flex-col">
            <Gauge className="h-5 w-5 text-white mb-2" />
            <span className="text-xs font-light text-white/70 uppercase tracking-wider">
              Speed
            </span>
            <span className="text-lg font-light text-white mt-1">
              {jet.speed}
            </span>
          </div>
          <div className="flex flex-col">
            <MapPin className="h-5 w-5 text-white mb-2" />
            <span className="text-xs font-light text-white/70 uppercase tracking-wider">
              Range
            </span>
            <span className="text-lg font-light text-white mt-1">
              {jet.range}
            </span>
          </div>
          <div className="flex flex-col">
            <Users className="h-5 w-5 text-white mb-2" />
            <span className="text-xs font-light text-white/70 uppercase tracking-wider">
              Passengers
            </span>
            <span className="text-lg font-light text-white mt-1">
              {jet.passengers}
            </span>
          </div>
          <div className="flex flex-col">
            <DollarSign className="h-5 w-5 text-white mb-2" />
            <span className="text-xs font-light text-white/70 uppercase tracking-wider">
              Starting Price
            </span>
            <span className="text-lg font-light text-white mt-1">
              {jet.price}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex gap-4 transition-all duration-700 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <Button
            className="bg-white text-foreground hover:bg-white/90 px-8"
          >
            Learn more
          </Button>
          <Button
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-foreground px-8"
          >
            24/7 Charter Dispatch
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Fleet() {
  return (
    <section id="fleet" className="py-24 sm:py-32 bg-[#0a1628]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-white/60 mb-4">
            Our Aircraft
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6 text-white">
            Discover Our <span className="italic">Fleet</span>
          </h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            Each aircraft in our fleet is meticulously maintained and ready to exceed your expectations
          </p>
        </div>
      </div>

      {/* Fleet Grid - 2 Columns with Spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {fleet.map((jet, index) => (
            <JetCard key={jet.name} jet={jet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
