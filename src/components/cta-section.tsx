"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconRocket, IconSparkles, IconCheck } from "@tabler/icons-react";

export function CTASection() {
  const features = [
    "⚡ Setup in 5 minutes",
    "💸 No monthly fees ever",
    "🔒 Own your data",
    "📧 First 1,000 emails free",
    "📊 Real-time analytics",
    "🎨 50+ templates included",
  ];

  return (
    <section className="relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
            Start Collecting Leads<br />
            <span className="gradient-text">For Free</span>
          </h1>
          
          <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-16 mt-16 md:mt-8">
            One-time payment. First 1,000 triggered emails are entirely free.<br />
            <span className="text-cyan-400 font-semibold">Join 10,000+ creators who own their growth.</span>
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2 text-slate-300 bg-slate-800/50 rounded-full px-4 py-2 backdrop-blur-sm border border-slate-700"
              >
                <IconCheck className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center space-x-3 px-12 py-4 text-xl font-bold hover:scale-105 transition-transform"
            >
              <IconRocket className="h-6 w-6" />
              <span>Get Lifetime Access</span>
            </HoverBorderGradient>
            
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-slate-800 text-slate-300 border-2 border-slate-600 flex items-center space-x-3 px-12 py-4 text-xl font-bold hover:scale-105 transition-transform"
            >
              <IconSparkles className="h-6 w-6" />
              <span>Watch Demo</span>
            </HoverBorderGradient>
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 max-w-2xl mx-auto"
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Not happy? Get your money back, no questions asked. We're that confident you'll love owning your growth instead of renting it.
            </p>
          </motion.div>

          {/* Final Push */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 text-lg mb-4">
              🔥 <span className="text-orange-400 font-semibold">Limited Time:</span> Early adopter pricing
            </p>
            <p className="text-slate-500 text-sm">
              No credit card required for free tier • Cancel anytime • Own your data forever
            </p>
          </motion.div>
        </motion.div>
      </LampContainer>

      {/* Footer */}
      <div className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4 pt-4">
                <span className="text-yellow-400">LeadFlow</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The last lead generation tool you'll ever need to buy. Own your growth, own your future.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "YouTube", "Instagram", "LinkedIn"].map((platform, index) => (
                  <div key={index} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                    {platform[0]}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#templates" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>&copy; 2024 LeadFlow. All rights reserved. Built with 💜 for creators who want to own their growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 