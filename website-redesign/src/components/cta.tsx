import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2070&auto=format&fit=crop"
          alt="Sunset over yacht deck"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="mb-6 text-sm font-light tracking-[0.3em] uppercase opacity-90">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-6">
            Let Us Craft Your
            <br />
            <span className="italic">Perfect Voyage</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-light leading-relaxed opacity-90 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers and discover the latest additions to our prestigious fleet
          </p>

          <form className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-3 max-w-xl mx-auto">
            <div className="flex-1">
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-white/95 backdrop-blur border-white h-12 text-foreground"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 h-12 px-8"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-6 text-sm font-light opacity-75">
            Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
