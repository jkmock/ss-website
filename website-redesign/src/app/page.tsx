import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Fleet } from "@/components/fleet";
import { FBOServices } from "@/components/fbo-services";
import { Experience } from "@/components/experience";
import { TrustedServices } from "@/components/trusted-services";
import { Destinations } from "@/components/destinations";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Fleet />
        <FBOServices />
        <TrustedServices />
        <Experience />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}
