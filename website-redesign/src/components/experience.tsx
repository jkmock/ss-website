export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Decades of Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light mb-6">
            Two Decades of SkySouth Flights
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Explore our map of thousands of flights to hundreds of airports
          </p>
        </div>

        {/* Iframe Container */}
        <div className="mx-auto" style={{ width: "80%" }}>
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            <iframe
              src="https://skysouthmap.vercel.app/embed"
              className="absolute top-0 left-0 w-full h-full shadow-2xl"
              title="SkySouth Experience Map"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
