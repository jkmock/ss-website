"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-2xl font-serif font-bold tracking-wider transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              SkySouth
            </Link>
          </div>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link
              href="#experiences"
              className={`text-sm font-light tracking-widest uppercase transition-colors ${
                scrolled
                  ? "text-foreground hover:text-foreground/70"
                  : "text-white hover:text-white/80"
              }`}
            >
              Experiences
            </Link>
            <Link
              href="#fleet"
              className={`text-sm font-light tracking-widest uppercase transition-colors ${
                scrolled
                  ? "text-foreground hover:text-foreground/70"
                  : "text-white hover:text-white/80"
              }`}
            >
              Fleet
            </Link>
            <Link
              href="#destinations"
              className={`text-sm font-light tracking-widest uppercase transition-colors ${
                scrolled
                  ? "text-foreground hover:text-foreground/70"
                  : "text-white hover:text-white/80"
              }`}
            >
              Destinations
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-light tracking-widest uppercase transition-colors ${
                scrolled
                  ? "text-foreground hover:text-foreground/70"
                  : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={scrolled ? "" : "text-white hover:text-white"}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="#experiences">Experiences</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#fleet">Fleet</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#destinations">Destinations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
