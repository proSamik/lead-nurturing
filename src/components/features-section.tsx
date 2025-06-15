"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const content = [
    {
      title: "No Subscription Fees",
      description:
        "One-time payment, infinite uses. Stop bleeding money on monthly subscriptions that add up to thousands per year. Own your tools, own your growth. This is the future of creator economics - pay once, profit forever.",
      content: (
        <div className="h-full w-full bg-yellow-500 flex items-center justify-center text-black rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💰</div>
            <div className="text-2xl font-bold mb-2">$0/month</div>
            <div className="text-lg opacity-90">Forever</div>
          </div>
        </div>
      ),
    },
    {
      title: "First 1,000 Emails Free",
      description:
        "Try before scaling up. Get your first 1,000 email sends completely free. No hidden costs, no surprise charges. Perfect for testing your funnels and proving ROI before you invest more. Most creators never even hit this limit in their first month.",
      content: (
        <div className="h-full w-full bg-blue-600 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">📧</div>
            <div className="text-2xl font-bold mb-2">1,000 Emails</div>
            <div className="text-lg opacity-90">Completely Free</div>
          </div>
        </div>
      ),
    },
    {
      title: "Zero Vendor Lock-in",
      description:
        "Export data, self-host email, switch providers anytime. Your audience belongs to YOU, not us. Download your subscriber list, email templates, and analytics data whenever you want. True ownership in the creator economy.",
      content: (
        <div className="h-full w-full bg-gray-800 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔓</div>
            <div className="text-2xl font-bold mb-2">Your Data</div>
            <div className="text-lg opacity-90">Your Control</div>
          </div>
        </div>
      ),
    },
    {
      title: "Template Library",
      description:
        "Professional, mobile-ready pages that convert. 50+ battle-tested templates designed by conversion experts. From minimalist to bold, we've got styles that match your brand. All templates are mobile-first and load lightning fast.",
      content: (
        <div className="h-full w-full bg-gray-700 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🎨</div>
            <div className="text-2xl font-bold mb-2">50+ Templates</div>
            <div className="text-lg opacity-90">Mobile-First Design</div>
          </div>
        </div>
      ),
    },
    {
      title: "Easy Setup",
      description:
        "Start collecting leads in under 5 minutes. No coding required, no complex integrations. Pick a template, customize your copy, connect your email service, and you're live. Even your grandma could set this up (but she probably doesn't need lead magnets).",
      content: (
        <div className="h-full w-full bg-yellow-500 flex items-center justify-center text-black rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-2xl font-bold mb-2">5 Minutes</div>
            <div className="text-lg opacity-90">From Zero to Live</div>
          </div>
        </div>
      ),
    },
    {
      title: "Full Analytics Dashboard",
      description:
        "Pinpoint traffic sources & leak-funnels. Know exactly where your best subscribers come from. Track YouTube vs Instagram vs TikTok performance. Identify drop-off points and optimize for maximum conversion. Data-driven growth, not guesswork.",
      content: (
        <div className="h-full w-full bg-blue-600 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-2xl font-bold mb-2">Real-Time</div>
            <div className="text-lg opacity-90">Analytics</div>
          </div>
        </div>
      ),
    },
    {
      title: "Custom Email Sequences",
      description:
        "Event-based and send-on-open flows. Create sophisticated email journeys that nurture leads automatically. Welcome sequences, product launches, re-engagement campaigns - all triggered by user behavior. Set it once, profit forever.",
      content: (
        <div className="h-full w-full bg-gray-800 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🤖</div>
            <div className="text-2xl font-bold mb-2">Smart</div>
            <div className="text-lg opacity-90">Automation</div>
          </div>
        </div>
      ),
    },
    {
      title: "Social Integration",
      description:
        "Automatically track YouTube, Instagram, X, Reddit, and more. See which platforms drive the most valuable subscribers. Optimize your content strategy based on real conversion data, not vanity metrics. Focus your energy where it actually pays off.",
      content: (
        <div className="h-full w-full bg-gray-700 flex items-center justify-center text-white rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🌐</div>
            <div className="text-2xl font-bold mb-2">Multi-Platform</div>
            <div className="text-lg opacity-90">Tracking</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Core <span className="text-blue-600">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to turn visitors into subscribers, subscribers into customers
          </motion.p>
        </div>
      </div>
      
      <StickyScroll content={content} />
      
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to own your growth? 🚀
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Stop renting your success. Start owning it.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
            Claim Your Lifetime Access
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            ⚡ Setup in 5 minutes • 💸 No monthly fees • 🔒 Own your data
          </p>
        </motion.div>
      </div>
    </section>
  );
} 