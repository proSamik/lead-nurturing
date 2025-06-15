"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import { IconCheck, IconX } from "@tabler/icons-react";

export function ComparisonSection() {
  const features = [
    "One-time payment",
    "First 1,000 emails free",
    "Platform referral tracking",
    "Email automation built-in",
    "No vendor lock-in",
    "Real-time analytics",
    "Template library",
    "Social media integration",
  ];

  const competitors = [
    {
      name: "ConvertKit",
      url: "https://convertkit.com",
      features: [false, false, false, false, false, true, true, false],
      price: "$29/month",
      color: "red",
    },
    {
      name: "Beehiiv",
      url: "https://beehiiv.com",
      features: [false, false, false, true, false, true, true, false],
      price: "$39/month",
      color: "orange",
    },
    {
      name: "Mailchimp",
      url: "https://mailchimp.com",
      features: [false, false, false, true, false, true, false, false],
      price: "$20/month",
      color: "yellow",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Why We're <span className="text-blue-600">Different</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Compare us with the "big players" and see why creators are making the switch
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-lg">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-500">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">🚀</span>
                      <span>Our Tool</span>
                    </div>
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="px-6 py-4 text-center font-bold text-lg">
                      <LinkPreview url={competitor.url} className="text-white hover:text-gray-200">
                        {competitor.name}
                      </LinkPreview>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{feature}</td>
                    <td className="px-6 py-4 text-center bg-green-50">
                      <IconCheck className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="px-6 py-4 text-center">
                        {competitor.features[featureIndex] ? (
                          <IconCheck className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <IconX className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-purple-50 to-blue-50 border-t-2 border-purple-200">
                  <td className="px-6 py-4 font-bold text-lg text-gray-900">Monthly Cost</td>
                  <td className="px-6 py-4 text-center bg-green-100">
                    <div className="text-2xl font-bold text-green-600">$0</div>
                    <div className="text-sm text-green-500">Forever</div>
                  </td>
                  {competitors.map((competitor, index) => (
                    <td key={index} className="px-6 py-4 text-center">
                      <div className="text-xl font-bold text-red-600">{competitor.price}</div>
                      <div className="text-sm text-red-500">Every month</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: "💵",
              title: "No Monthly Surprise Fees",
              description: "You pay once and use forever.",
            },
            {
              icon: "🛠",
              title: "One Platform, One Flow",
              description: "No need for Zapier, no API headaches.",
            },
            {
              icon: "📈",
              title: "More Insights, Better Strategy",
              description: "Referrer tracking tells you which platform performs.",
            },
            {
              icon: "⚙️",
              title: "Grow on Your Terms",
              description: "UsePlunk means your audience is always yours.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Ideal For Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Perfect For
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📺",
                title: "New YT/IG creators",
                description: "building email lists",
              },
              {
                emoji: "📝",
                title: "Bloggers & course-makers",
                description: "launching freebies",
              },
              {
                emoji: "😤",
                title: "Anyone tired of",
                description: "juggling tools & fees",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
              Join the Revolution 🔥
            </button>
            <p className="text-gray-500 mt-4">
              Stop paying monthly. Start owning your growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 