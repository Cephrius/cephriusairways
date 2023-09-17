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
        darkMode ? BsFillSunFill : BsFillMoonFill
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'; // Save user's preference   
      }
    }, [darkMode]);
  
    const Icons = darkMode ? BsFillSunFill : BsFillMoonFill;


    return (
        <main className="min-h-screen p-[55px]  lg:p-24 bg-white transition-all duration-300 dark:bg-black">

        <link rel="icon" href="/e.svg" />  {/* Try to fix the svg image*/}
            {/* Dark Mode Toggle */}
            <section>
            <nav className='text-3xl lg:text-2xl dark:text-white  '>
                <ul>
                  <li>
                    <div>
                      <Fade direction="down" duration={2000} damping={0.999} delay={1500}>
                        <div className=" py-2 mb-12 flex justify-end text-[14px] items-center lg:text-xl  ">
                        <h2 className=" font-Incompleeta flex-1 justify-start"><a href="/">Cephrius Airways</a></h2>
                        <div className="cursor-pointer">
                                                  </div>
                        {darkMode ? (
                          <BsFillSunFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} />
                        ) : (
                          <BsFillMoonFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} />
                        )}
                          
                      </div>
                    </Fade> 
                  </div>
                  </li>
                </ul>  
            </nav>
          </section>
          {/* Implement Search Bar */}
            
              <div className="p-32 mt-52 bg-black w-[50] h-[50] rounded-2xl ">

              </div>
            



        </main>
    
    )
}