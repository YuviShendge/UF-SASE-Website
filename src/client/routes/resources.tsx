import { cn } from "@/shared/utils";
import { imageUrls } from "@assets/imageUrls";
import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { IoMdLink } from "react-icons/io";
import { seo } from "../utils/seo";

interface ResourceCard {
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const studyMaterials: Array<ResourceCard> = [
  {
    title: "Study Guide 1",
    description: "Comprehensive guide for subject ABC.",
    linkText: "View Guide",
    link: "#",
  },
  {
    title: "Study Guide 2",
    description: "Practice problems for XYZ.",
    linkText: "Access Problems",
    link: "#",
  },
];

const workshops: Array<ResourceCard> = [
  {
    title: "Workshop Slides",
    description: "Slides from our recent leadership workshop.",
    linkText: "Open Slides",
    link: "#",
  },
  {
    title: "Workshop Recording",
    description: "Watch the session from last semester’s event.",
    linkText: "Watch",
    link: "#",
  },
];

const careerResources: Array<ResourceCard> = [
  {
    title: "Resume Tips",
    description: "A quick guide to building a strong resume.",
    linkText: "View Tips",
    link: "#",
  },
  {
    title: "Interview Prep",
    description: "Resources to help you ace your interviews.",
    linkText: "Start Preparing",
    link: "#",
  },
];

const resourceTabs: Record<string, Array<ResourceCard>> = {
  "Study Materials": studyMaterials,
  Workshops: workshops,
  "Career Resources": careerResources,
};

export const Route = createFileRoute("/resources")({
  meta: () => [
    ...seo({
      title: "Resources | UF SASE",
      description: "UF Society of Asian Scientists & Engineers",
      image: imageUrls["SASELogo.png"],
    }),
  ],
  component: () => {
    const [activeTab, setActiveTab] = useState<keyof typeof resourceTabs>("Study Materials");
    const categories = Object.keys(resourceTabs);
    const tabRefs = useRef<Array<HTMLButtonElement>>([]);
    const [sliderStyle, setSliderStyle] = useState({
      left: "0px",
      width: "0px",
    });

    useEffect(() => {
      const currentIndex = categories.indexOf(activeTab);
      if (currentIndex < 0) return;
      const currentTab = tabRefs.current[currentIndex];
      if (!currentTab) return;
      setSliderStyle({
        left: currentTab.offsetLeft + "px",
        width: currentTab.offsetWidth + "px",
      });
    }, [activeTab, categories]);

    return (
      <div className="w-full">
        {/* Title */}
        <div className="text-center">
          <h1 className="mt-4 pb-8 font-oswald text-5xl font-medium sm:text-6xl md:text-7xl">RESOURCES</h1>
        </div>

        {/* Blue line under title */}
        <div className="mx-[5%] border-b-4 border-saseBlue" />

        {/* Tab Bar / Sliding Underline */}
        <div className="mt-6 flex justify-center border-b">
          <ul className="relative flex space-x-4 px-4">
            <div className="absolute bottom-0 h-1 bg-saseBlue transition-all duration-300" style={sliderStyle} />
            {categories.map((category, idx) => {
              const isActive = category === activeTab;
              return (
                <li key={category}>
                  <button
                    ref={(el) => {
                      if (el) tabRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveTab(category as keyof typeof resourceTabs)}
                    className={cn(
                      "relative whitespace-nowrap px-4 py-2 text-base font-semibold transition-colors",
                      isActive ? "text-saseBlue" : "text-gray-600 hover:text-black",
                    )}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {resourceTabs[activeTab].map((card, index) => (
            <div key={index} className="w-full max-w-md rounded-lg border p-4 shadow-md hover:shadow-lg">
              <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
              <p className="mb-4 text-gray-600">{card.description}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Green line */}
        <div className="mx-[5%] border-b-4 border-saseGreen" />

        {/* Linktree Button */}
        <div className="flex justify-center py-8">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div
              className={cn(
                "mx-auto flex h-10 w-fit items-center justify-center rounded-full border-2",
                "border-gray-700 bg-saseBlue px-4 text-white shadow-[0px_5px_0px_0px_rgb(203,203,212)]",
                "transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-saseGreen hover:text-black",
              )}
            >
              <div className="pr-2 font-redhat">Linktree Default</div>
              <IoMdLink size={15} />
            </div>
          </a>
        </div>
      </div>
    );
  },
});
