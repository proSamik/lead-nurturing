"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconTemplate, IconCapture, IconChartLine, IconArrowRight } from "@tabler/icons-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <IconTemplate className="h-12 w-12 text-purple-500" />,
      title: "Build Your Landing Page",
      description: "Pick a template, add thumbnail/video, write a quick description, and insert your lead magnet link.",
      features: ["Choose from 50+ templates", "Drag & drop builder", "Mobile-responsive", "Custom branding"],
      color: "purple",
    },
    {
      number: "02",
      icon: <IconCapture className="h-12 w-12 text-blue-500" />,
      title: "Capture & Automate",
      description: "Embeds sign-up form. On submission, UsePlunk triggers a customizable email sequence—your resource is delivered in minutes.",
      features: ["Smart form embedding", "Instant email delivery", "Custom sequences", "A/B testing"],
      color: "blue",
    },
    {
      number: "03",
      icon: <IconChartLine className="h-12 w-12 text-green-500" />,
      title: "Track & Optimize",
      description: "View real-time reports: Visitors by platform, Signup count & opt-in rate, Top referrers",
      features: ["Real-time analytics", "Platform tracking", "Conversion rates", "ROI insights"],
      color: "green",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            How It <span className="text-blue-600">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get from zero to lead-generating machine in 3 simple steps
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative"
              >
                {/* Step Card */}
                <div className={`bg-white rounded-3xl p-8 shadow-xl border-2 border-${step.color}-100 hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`mb-6 p-4 bg-${step.color}-50 rounded-2xl w-fit`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className={`w-2 h-2 bg-${step.color}-400 rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-lg border-2 border-gray-100">
                      <IconArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            📊 Your Analytics Dashboard
          </h3>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">2,847</div>
                <div className="text-gray-600">Total Visitors</div>
                <div className="text-sm text-green-500 mt-1">↗ +23% this week</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">487</div>
                <div className="text-gray-600">Email Signups</div>
                <div className="text-sm text-green-500 mt-1">↗ +17% conversion</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">YouTube</div>
                <div className="text-gray-600">Top Referrer</div>
                <div className="text-sm text-blue-500 mt-1">64% of traffic</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
            Start Your 5-Minute Setup 🚀
          </button>
          <p className="text-gray-500 mt-4">No credit card required • First 1,000 emails free</p>
        </motion.div>
      </div>
    </section>
  );
} 