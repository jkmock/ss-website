"use client";

import { MapPin, Globe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Strategically positioned FBO facilities providing quick access to major business centers and destinations.",
  },
  {
    icon: Globe,
    title: "Regional Service",
    description: "Comprehensive coverage across the region with dedicated support at every location in our network.",
  },
  {
    icon: Zap,
    title: "Aircraft Capabilities",
    description: "State-of-the-art facilities equipped to handle a wide range of aircraft with full-service capabilities.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const Icon = service.icon;
  const delay = index * 150;

  return (
    <div
      ref={cardRef}
      className={`text-center p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="font-serif text-2xl font-normal text-white mb-4">
        {service.title}
      </h3>
      <p className="text-white/90 font-light leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export function FBOServices() {
  return (
    <section id="fbo-services" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Private jet on tarmac with stairs"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-white/80 mb-4">
            Premium Facilities
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6 text-white">
            First Class <span className="italic">FBO Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
