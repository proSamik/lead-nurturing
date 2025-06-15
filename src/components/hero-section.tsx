"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconSparkles, IconRocket } from "@tabler/icons-react";

export function HeroSection() {
  const products = [
    {
      title: "Lead Capture Dashboard",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Email Analytics",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Traffic Tracking",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Social Media Integration",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Email Templates",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Conversion Funnel",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Lead Magnets",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "YouTube Integration",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Instagram Analytics",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Landing Page Builder",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Email Automation",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Growth Analytics",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Creator Tools",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Audience Insights",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Revenue Tracking",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=entropy&auto=format",
    },
  ];

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-50" />
      <HeroParallax products={products} />
      
      {/* Custom Header Override */}
      <div className="absolute top-0 left-0 right-0 z-10 max-w-7xl mx-auto py-20 md:py-40 px-4 w-full">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-8xl font-bold text-black leading-tight">
            Grow Your Audience,<br />
            <span className="text-blue-600">Not Your Costs</span> 💸
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-700 leading-relaxed">
            A one-time purchase tool that <span className="font-semibold text-yellow-500">automates lead capture</span>, 
            <span className="font-semibold text-blue-600"> email follow‑ups</span>, and 
            <span className="font-semibold text-gray-800"> traffic tracking</span>—no monthly fees, 
            no vendor lock‑in, and your first 1,000 emails are <span className="font-bold text-yellow-500">FREE</span> ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-blue-600 text-white flex items-center space-x-2 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <IconRocket className="h-5 w-5" />
              <span>Get Started — It's Free</span>
            </HoverBorderGradient>
            
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-black border-2 border-gray-200 flex items-center space-x-2 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <IconSparkles className="h-5 w-5" />
              <span>See How It Works</span>
            </HoverBorderGradient>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500 font-medium">
              🔥 Join 10,000+ creators who've ditched monthly subscriptions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 