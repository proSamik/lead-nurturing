"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconStar, IconRocket } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconStar className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "How It Works",
      link: "#how-it-works",
      icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
  ];
  
  return <FloatingNav navItems={navItems} />;
} 