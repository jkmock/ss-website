"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaneTakeoff, CalendarClock, ClipboardCheck, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: PlaneTakeoff,
    title: "Fast Departures",
    description: "Experience rapid boarding and takeoff with minimal wait times, getting you to your destination quickly.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Schedules",
    description: "Fly on your schedule, not ours. Customize departure and arrival times to fit your needs perfectly.",
  },
  {
    icon: ClipboardCheck,
    title: "Seamless Planning",
    description: "Our expert team handles every detail from flight planning to ground transportation for a stress-free experience.",
  },
  {
    icon: Building2,
    title: "FBO Services",
    description: "Access premium Fixed-Base Operator facilities with luxury lounges, catering, and concierge services.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
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

  const Icon = feature.icon;
  const delay = index * 100;

  return (
    <Card
      ref={cardRef}
      className={`relative overflow-hidden bg-[#0a1628] border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-white/20 min-h-[340px] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out',
        transitionDelay: isVisible ? '0s, 0s, 0s, 0s, 0s' : `0s, 0s, 0s, ${delay}ms, ${delay}ms`
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <CardHeader className="relative text-center pb-6 h-full flex flex-col justify-start items-center px-6 pt-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mb-8 ring-1 ring-white/20">
          <Icon className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="font-serif text-3xl font-normal mb-4 text-center text-white whitespace-nowrap">{feature.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-center text-white/80 max-w-sm">
          {feature.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function Features() {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 via-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-[#0a1628]/60 mb-4">
            The Ultimate Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6 text-[#0a1628]">
            Why Choose <span className="italic">SkySouth</span>
          </h2>
          <p className="text-lg text-[#0a1628]/70 font-light leading-relaxed">
            Two decades of experience in the private aviation industry
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
