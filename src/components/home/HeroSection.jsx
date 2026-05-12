import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#13233f] text-white">
      <div className="relative h-[clamp(560px,56.25vw,760px)] w-full overflow-hidden">
        <img
          src="/images/hero/home-hero.png"
          alt="International cargo ship and global trade routes"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[60%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-[#13233f]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13233f]/96 via-[#13233f]/72 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13233f]/75 via-transparent to-[#13233f]/35" />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[680px]">
              <div className="mb-3 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-sm sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                Houston, TX — Sri Lanka Trade Lane
              </div>

              <h1 className="text-[42px] font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">Global Product</span>
                <span className="block">Sourcing &amp;</span>
                <span className="block">
                  International <span className="text-amber-400">Trade</span>
                </span>
                <span className="block text-amber-400">Solutions</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-100 sm:mt-5 sm:text-lg sm:leading-7">
                Connecting businesses worldwide with reliable product sourcing,
                export coordination, and international logistics support across
                global trade lanes.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-amber-400 sm:px-5 sm:py-3"
                >
                  Request a Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/how-it-works"
                  className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-5 sm:py-3"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}