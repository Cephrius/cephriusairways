'use client'

import React from "react"
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'; 



export default function book() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Read initial theme from local storage or system preference
    const initialDarkMode =
      typeof localStorage !== 'undefined' && // Check if localStorage is available
      (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
        
    setDarkMode(initialDarkMode);
  }, []);
    
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark'; // Save user's preference
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'; // Save user's preference
      }
    }, [darkMode]);
  
    const Icons = darkMode ? BsFillSunFill : BsFillMoonFill;


    return (
        <main className="min-h-screen p-[55px] items-center justify-between lg:p-24 bg-white transition-all duration-300 dark:bg-black">
        <link rel="icon" href="/e.svg" />  {/* Try to fix the svg image*/}
            {/* Dark Mode Toggle */}
           <nav className='py-2 mb-12 flex justify-end text-3xl lg:text-2xl'>
          <div className='text-black  flex flex-row  dark:text-white ' >
            {/* Pass darkMode and setDarkMode */}
            Hello There
          <Fade direction='down' duration={1250} damping={0.999}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl "
            >
            <Icons />
          </button>
          </Fade> 
          </div>
        </nav>

        <div>
             {/* Create Flight Search Bar */}


             
        </div>
        

        </main>
    
    )
}