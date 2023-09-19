'use client'
import {  Button , Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import React from "react"
import {PiArrowsHorizontalBold} from "react-icons/pi"
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
            
          
              
              <div className="mt-[100px] flex flex-1 justify-between dark:text-white font-Incompleeta">
                <div className="text-5xl">
                    {/* Origin */}  
                    <h1>IAH </h1>
                </div>
                <div className="flex text-5xl mt-2">
                  <PiArrowsHorizontalBold />
                </div>
                <div className="flex text-5xl">
                    {/* Destination */}
                    <h1>ATL</h1>
                </div>
                
               
                

              </div>
            <div className="flex flex-1 justify-between text-center dark:text-white">
              <div className="font-Incompleeta">Houston, TX</div>
              <div className="font-Incompleeta">Atlanta, GA</div>
            </div>


        </main>
    
    )
}