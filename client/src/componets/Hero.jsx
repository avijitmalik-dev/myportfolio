import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import profileImage from "../images/AVI-2.jpeg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  h-screen bg-slate-50 gap-12 lg:gap-52 p-6 lg:p-0">
      <div className="max-w-96 flex flex-col items-center lg:items-center justify-center gap-6 text-center md:flex md:flex-col lg:text-left">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold uppercase md:pt-16">
          AVIJIT <br /> MALIK
        </h1>
        <h2 className="font-sans text-2xl lg:text-3xl uppercase font-bold">
          Full-stack Developer
        </h2>
        <div className="flex flex-row gap-3 cursor-pointer">
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/avijitmalik-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/avijit-malik-376a84255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-700" />
          </a>
        </div>
        <div className="flex items-center">
          <p className="capitalize font-sans space-x-4 font-bold text-sm lg:text-center">
            Full-Stack Developer proficient in Node.js, React.js, MySQL,
            MongoDB, and Python. Passionate about crafting robust and scalable
            web applications. Skilled in leveraging Git for efficient version
            control. Seeking opportunities to contribute to innovative projects
            and drive technological advancements.
          </p>
        </div>
        <button className="bg-blue-700 text-white py-2 px-7 rounded-md uppercase">
          resume
        </button>
      </div>
      <div className="w-48 h-48 flex items-center justify-center lg:w-64 lg:h-68 mt-6 lg:mt-0">
        <img
          src={profileImage}
          className="rounded-full bg-transparent"
          alt="Your Image Alt Text"
        />
      </div>
    </div>
  );
}
