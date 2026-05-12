import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#13233f] text-white">
      <div className="relative min-h-[560px] w-full overflow-hidden md:min-h-[680px] lg:min-h-[760px]">
        <img
          src="/images/hero/home-hero.png"
          alt="International cargo ship and global trade routes"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-[#13233f]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13233f]/96 via-[#13233f]/72 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13233f]/70 via-transparent to-[#13233f]/35" />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 pt-[76px] sm:px-8 lg:px-10">
            <div className="max-w-[680px]">
              <div className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 backdrop-blur-sm">
                Houston, TX — Sri Lanka Trade Lane
              </div>

              <h1 className="text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Global Product</span>
                <span className="block">Sourcing &amp;</span>
                <span className="block">
                  International <span className="text-amber-400">Trade</span>
                </span>
                <span className="block text-amber-400">Solutions</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
                Connecting businesses worldwide with reliable product sourcing,
                export coordination, and international logistics support across
                global trade lanes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-amber-400"
                >
                  Request a Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}