"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconStar, IconQuote } from "@tabler/icons-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "YouTube Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "I converted 20% of my YouTube viewers using one of the templates—best investment I've made! Finally ditched ConvertKit's monthly fees.",
      platform: "YouTube",
      subscribers: "125K",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Course Creator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "The analytics showed me that Instagram was my goldmine, not TikTok. Pivoted my strategy and 3x'd my email list in 2 months.",
      platform: "Instagram",
      subscribers: "89K",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Newsletter Writer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Setup took literally 4 minutes. I was skeptical about the 'no monthly fees' thing but it's legit. Saved me $400+ already.",
      platform: "Twitter",
      subscribers: "45K",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Tech Blogger",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "The referrer tracking is insane. Found out Reddit was driving 40% of my conversions. Now I focus there and my ROI is through the roof.",
      platform: "Reddit",
      subscribers: "67K",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "Fitness Influencer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Love that I own my data. No more worrying about platform changes or getting locked out. This is how creator tools should work.",
      platform: "Instagram",
      subscribers: "203K",
      rating: 5,
    },
    {
      name: "Alex Johnson",
      role: "Podcast Host",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "The email automation is chef's kiss. Set it up once, and it's been nurturing leads for 6 months straight. Pure passive income.",
      platform: "Podcast",
      subscribers: "156K",
      rating: 5,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Creators Using It", icon: "👥" },
    { number: "2.5M+", label: "Emails Sent", icon: "📧" },
    { number: "$500K+", label: "Monthly Fees Saved", icon: "💰" },
    { number: "4.9/5", label: "Average Rating", icon: "⭐" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Social <span className="text-blue-600">Proof</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real creators, real results, real freedom from monthly fees
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <IconQuote className="h-8 w-8 text-purple-400" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  <div className="text-purple-600 text-sm font-medium">
                    {testimonial.platform} • {testimonial.subscribers} followers
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            See It In Action 🎥
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <div className="text-2xl font-bold mb-2">Watch the Demo</div>
                  <div className="text-lg opacity-90">See how Sarah got 487 subscribers in 30 days</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl mb-4">
                  "Want to turn your 100 views into 20 subscribers? Here's exactly how I did it..."
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
                  <span>⏱ 90 seconds</span>
                  <span>•</span>
                  <span>👀 Real results</span>
                  <span>•</span>
                  <span>🔥 No fluff</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
              Get Started Like Sarah 🚀
            </button>
            <p className="text-gray-500 mt-4">
              Join 10,000+ creators who've ditched monthly fees
            </p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6 font-medium">Trusted by creators from:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["YouTube", "Instagram", "TikTok", "Twitter", "LinkedIn", "Reddit", "Podcast"].map((platform, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {platform}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 