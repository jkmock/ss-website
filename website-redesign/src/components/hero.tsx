"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="Other/sunsetjet2.png"
          alt="Luxury yacht on crystal blue water"
          className="h-full w-full object-cover object-left scale-100"
          style={{ transformOrigin: 'left center' }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-left text-white">
            <p className="mb-6 text-sm font-light tracking-[0.3em] uppercase opacity-90">
              Elevate Your Journey
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 max-w-3xl ">
              Uncompromising Service
              At Competitive Light Jet Rates
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl opacity-90">
              Founded in 2003, we specialize in Light Jet Charters. Based out of Burlington, NC, our aircraft serve the greater Eastern US.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground px-8 py-6 text-base w-full sm:w-56"
              >
                View our Fleet
              </Button>
              <Button
                size="lg"
                className="border-2 border-transparent bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base w-full sm:w-56"
              >
                24/7 Charter Dispatch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-white opacity-75" />
      </button>
    </section>
  );
}
