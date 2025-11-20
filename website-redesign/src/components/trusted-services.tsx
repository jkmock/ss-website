"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function TrustedServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="trusted-services" className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6">
            Trusted Private Jet Charter and FBO Services{" "}
            <span className="italic">Since 2003</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div ref={sectionRef} className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div
            className={`lg:col-span-2 relative h-[300px] overflow-hidden shadow-xl transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <img
              src="/Other/team-members.webp"
              alt="SkySouth team members"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div
            className={`lg:col-span-3 space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <p className="text-xl text-foreground font-light leading-relaxed">
              Founded by Kevin Mock, SkySouth began with a single Baron aircraft and has grown into a full-service FBO and private jet charter operator based in Burlington, NC. Our team brings thousands of flight hours and a passion for delivering seamless, safe, and personalized aviation services to clients across the Piedmont Triad and beyond.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="px-8">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
