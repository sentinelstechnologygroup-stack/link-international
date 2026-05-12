import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent tracking-wide">Houston, TX — Sri Lanka Trade Lane</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Global Product Sourcing & International{" "}
              <span className="text-accent">Trade Solutions</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
              Connecting businesses worldwide with reliable product sourcing, export coordination, and international logistics support across global trade lanes.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/request-quote">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-7 h-13 text-base gap-2 shadow-lg shadow-accent/20">
                  Request a Sourcing Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 h-13 text-base">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right side — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl" />
              <img
                src="/images/images/hero/home-hero.png"
                alt="Global trade and logistics"
                className="relative rounded-3xl border border-white/10 w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}