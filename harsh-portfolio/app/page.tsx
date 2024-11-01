"use client";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import InteractiveGraph from "../components/InteractiveGraph";
import '../components/styles/TypingAnimation.css';
import { Avatar } from "@nextui-org/react";

import Project from "@/components/Projects";

export default function Home() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [fixedPoint, setFixedPoint] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Change here
  
  const sayHello = () => {
    console.log("Hello, World!");
  };

  const codeSnippets = [
    "// Point 1 code example\nconst example = 1;",
    "// Point 2 code example\nconst example = 2;",
    "// Point 3 code example\nconst example = 3;",
    "// Point 4 code example\nconst example = 4;",
  ];

  const initialCode = `
    // Random Code Example
    function sayHello() {
      console.log("Hello, World!");
    }

    sayHello();

    // Hover over a point to see the code, click to fix the code;
  `;

  // Determine which code snippet to display
  const displayedCode =
    hoveredPoint !== null
      ? codeSnippets[hoveredPoint]
      : fixedPoint !== null
        ? codeSnippets[fixedPoint]
        : initialCode;

        const toggleDropdown = (index: number) => {
          setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        };
        
  return (
    <section
      className="flex flex-col items-start justify-start pt-10
    
    \\\"
    >
      {/* Header Section */}
      <div className="flex items-center text-left w-full">
        <div>
          <h1 className="text-[40px] lg:text-[300px] font-extrabold -mt-32 typing-animation">
            HARSH BH.
          </h1>
        </div>
      </div>


      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center text-left w-full ">
        <div className="flex-1 mr-32 ml-11">
          <Link
            href="contact"
            className="inline-block text-lg font-semibold relative group "
          >
            Hit Me Up &rarr;
            <span className="block mt-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg flex justify-center items-center mx-auto ">
            <img
              src="/469ed5b7bf5bcf6026940aafdc2818d8.png"
              alt="Harsh B."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <p className="text-[44px] font-extrabold leading-tight w-full max-w-[900px] text-left">
            I&apos;m a software designer with a passion for creating interfaces with
            a focus on simplicity and clarity.
          </p>
          <p className="mt-11 text-[18px] font-normal text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>

      {/* Combined Graph and Code Section */}

      <div className="mt-32 w-full h-screen flex justify-center items-center">
        <div className="flex space-x-[30%] w-[100%] max-w-[100%] h-[80%] max-h-[800px]">
          <div
            className="flex-1 text-green-400 p-6  overflow-auto   left-0"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "18px",
              lineHeight: "1.5",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              backgroundImage: "linear-gradient(to right, #0f0f0f, #2b2b2b)",
            }}
          >
            <pre
              className="whitespace-pre-wrap"
              style={{ letterSpacing: "1px" }}
            >
              {displayedCode}
            </pre>
          </div>
          <div className="flex-1 p-8 bg-black rounded-2xl flex items-center right-0">
            <InteractiveGraph
              onPointHover={setHoveredPoint}
              onPointClick={(index) => {
                setFixedPoint(index);
                setHoveredPoint(null); // Clear hover to ensure fixed point is displayed
              }}
            />
          </div>
        </div>
      </div>

      {/* I Can Help You With Section */}
      <div className="mt-32 w-full">
        <div className="text-left mb-16 ml-11">
          <h2 className="text-5xl font-bold">I can help you with ...</h2>
        </div>
        <div className="flex justify-between text-left mx-12">
          <div className="flex-1 mx-4 border-l border-gray-600 pl-8">
            <h3 className="text-8xl text-gray-700 mb-4">01</h3>
            <h4 className="text-3xl font-bold mb-4">Design</h4>
            <p className="text-lg leading-relaxed">
              I make web designs that engage your audience and create the user
              experience you want.
            </p>
          </div>
          <div className="flex-1 mx-4 border-l border-gray-600 pl-8">
            <h3 className="text-8xl text-gray-700 mb-4">02</h3>
            <h4 className="text-3xl font-bold mb-4">Development</h4>
            <p className="text-lg leading-relaxed">
              Bringing visuals to life through developing highly functional web
              solutions.
            </p>
          </div>
          <div className="flex-1 mx-4 border-l border-gray-600 pl-8">
            <h3 className="text-8xl text-gray-700 mb-4">03</h3>
            <h4 className="text-3xl font-bold mb-4">The Full Package</h4>
            <p className="text-lg leading-relaxed">
              Get the best of both worlds for your website, capture your brand
              identity and get fully functional features.
            </p>
          </div>
        </div>
      </div>  

      {/* My Way of Getting Things Done Section */}
      <div className="mt-32 w-full py-20 flex">
        <div className="flex px-12">
          <div className="flex flex-col w-[40%] p-8 ">
            <h2 className="text-5xl font-bold mb-6">
              My way of getting things done
            </h2>
            <p className="text-lg leading-relaxed mb-6 w-[90%]">
              Fast and transparent, the path to owning a website that will
              represent your brand in the best of light is only 4 weeks away.
              Standing by the Waterfall methodology, I assure a step by step
              completion of the whole process.
            </p>
          </div>
          <div className="flex-1 w-[60%]">
            <ul className="text-lg leading-relaxed">
              {[
                {
                  title: "UX / Wireframing",
                  content:
                    "Detailed explanation of the UX and wireframing process.",
                },
                {
                  title: "Web Design",
                  content: "Description of the web design process.",
                },
                {
                  title: "Web Development",
                  content: "Overview of the web development process.",
                },
                {
                  title: "Analytics Setup / Support",
                  content: "Details about analytics setup and ongoing support.",
                },
              ].map((item, index) => (
                <li key={index} className="border-t border-gray-700">
                  <div
                    role="button" // Add this role for accessibility
                    tabIndex={0}   // Add tabIndex for keyboard navigation
                    className="flex justify-between items-center py-4 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{`${index + 1 < 10 ? "0" + (index + 1) : index + 1}. ${item.title}`}</span>
                    <span className="text-3xl">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="text-gray-400 pl-4 pb-4">
                      {item.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Project/>

  

      <section className="flex items-center justify-start py-10 ">
        {/* Avatar */}
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          className="w-40 h-40 mr-8 ml-8 mb-52"
        />

        {/* Text */}
        <h2 className="text-[100px]  leading-tight w-[70%]">
          Let’s talk about a project, collaboration, or an idea you may have
        </h2>

        {/* Contact Button */}
        <div className=" flex mt-[10%]">
          <a
            href="mailto:youremail@example.com"
            className="bg-black text-white text-2xl font-semibold py-3 px-8 rounded-full"
          >
            Drop me a line
          </a>
        </div>
      </section>

      <footer className="flex justify-between items-center py-10 border-t w-full">
        {/* Copyright Section */}
        <div className="text-gray-500 text-sm ml-4">
          © 2024 All Rights Reserved. Design & Coded with ❤️
        </div>

        {/* Spacer for centering the social media links */}
        <div className="flex-1 flex justify-center">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-black"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-black"
            >
              Instagram
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-600 hover:text-black"
            >
              Email
            </a>
          </div>
        </div>

        {/* Empty div to balance the layout */}
        <div className="w-32"></div>
      </footer>
    </section>
  );
}
