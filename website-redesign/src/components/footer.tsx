import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold tracking-wider">SkySouth</h3>
            <p className="text-sm font-light leading-relaxed text-gray-300 max-w-md">
              Curating extraordinary private charter experiences across the world's most captivating destinations since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light tracking-widest uppercase text-sm mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#fleet" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light tracking-widest uppercase text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm font-light text-gray-300">
                info@skysouth.com
              </li>
              <li className="text-sm font-light text-gray-300">
                +1 (555) 123-4567
              </li>
              <li className="text-sm font-light text-gray-300">
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-gray-400">
            &copy; {new Date().getFullYear()} SkySouth. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="text-sm font-light text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm font-light text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
