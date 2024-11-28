'use client'

import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import useTheme from '@/customhooks/useSystemhook';

function page() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme()
  console.log(theme)

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setIsDarkMode(window?.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  return (
    <div>
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-0 text-white">
          <div className="flex flex-col lg:flex-row justify-around gap-4 lg:gap-36 h-auto lg:h-40 items-center px-4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 dark:text-white text-black">
                Welcome to My Portfolio
              </h1>

              <div className="flex flex-col items-center">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-2 dark:text-white text-black">
                  My Self Vahid
                </h2>
                <p className="text-lg lg:text-xl dark:text-white text-black">
                  <TypeAnimation
                    sequence={[
                      "I'm a Full Stack Developer",
                      800,
                      "I'm a MERN Stack Developer",
                      900,
                      "I'm Web designer",
                      600,
                    ]}
                    repeat={Infinity}
                  />
                </p>
              </div>
            </div>

            <img
              src="/Anime-boy.png"
              alt="Right Side Image"
              className="w-1/2 lg:w-1/4 h-auto rounded-lg shadow-lg transition-all duration-700 hover:scale-110 hover:rotate-2 z-10 relative"
            />
          </div>
        </div>
      </div>
      <div className="inset-0 mt-10 flex md:flex-wrap sm:flex-wrap flex-wrap md:gap-10 p-4 -z-10 ">
      <img
          src="/MongoDB-js.png"
          alt="MongoDB"
          className={`m-2 w-full md:max-w-[256px] max-w-[156px] h-[150px] object-contain rounded-xl shadow-md hover:scale-125 hover:-rotate-6 hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-green-400/30 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <img
          src="/Express-js.png"
          alt="Express.js"
          className={`m-2 w-full md:max-w-[256px] max-w-[156px] h-[150px] object-contain rounded-xl shadow-md hover:scale-125 hover:rotate-6 hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-gray-400/30 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 394 80"
          className={`m-2 mix-blend-darken w-full md:max-w-[256px] max-w-[156px] h-[150px] object-contain rounded-xl shadow-md hover:scale-125 hover:rotate-12 hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-gray-400/30 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          fill="none"
          style={{
            color: 
            // window.matchMedia('(prefers-color-scheme: system)').matches ? '#FFFFFF' : '#000000'  
            theme ? '#000000' : '#FFFFFF'
          }}
        >
          <path
            d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
            fill="currentColor"
          />
          <path
            d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
            fill="currentColor"
          />
        </svg>

        <img
          src="/node-js.png"
          alt="Node.js"
          className={`m-2 w-full md:max-w-[256px] max-w-[156px] h-[150px] object-contain rounded-xl shadow-md hover:scale-125 hover:-rotate-12 hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-green-600/30 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />

        <img
          src="/React-js.png"
          alt="React.js"
          className={`m-2 w-full md:max-w-[256px] max-w-[156px] h-[150px] object-contain rounded-xl shadow-md hover:scale-125 hover:rotate-6 hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-blue-400/30 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
      </div>
    </div>
  )
}

export default page