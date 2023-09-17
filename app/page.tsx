'use client'

// Import statements
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Head from 'next/head';
import styles from '../app/styles.module.css'
import Link from 'next/link';



export default function Home() {


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

   

    <div className={`app-container ${darkMode ? "dark" : ""} `  }>
    <main className="min-h-screen p-[55px] items-center justify-between lg:p-24 bg-white transition-all duration-300 dark:bg-black">
        <link rel="icon" href="/e.svg" />  {/* Try to fix the svg image*/}
        <nav className='py-2 mb-12 flex justify-end text-3xl lg:text-2xl'>
          <div className='text-black  dark:text-white ' >
            {/* Pass darkMode and setDarkMode */}
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
        <div className='font-Incompleeta text-black dark:text-white lg:pt-[450px]'>
            <div className='text-[14px] lg:text-6xl flex items-center mt-[170px] lg:mt-[-165px]'>
          <Fade direction='down' damping={0.999} duration={2100}>
              <Image src={ darkMode ? '/whitelogo.png': '/logo.jpg' } width={80} height={80} alt='' className='mr-3' />
          </Fade>
              {/* Use the Image component here */}
          <Fade direction='down' duration={2130} damping={0.999}>
              {Array.from("CEPHRIUS  AIRWAYS").map((char, index) => (
                <span key={index} className='mr-1 lg:mr-2 '>
                  {char}
                </span>
              ))}
              </Fade>
            </div>
          
          
          <div className='flex flex-row ml-20 mt-[-1px] lg:ml-64 lg:mt-4 space-x-9'>
            <Fade direction='up' damping={1} duration={2120} >
            <div className='lg:text-3xl relative'>
              <Link href={"/book"}>
              
                  <span className='hover:scale-110 transition-all duration-300 group'>
                      BOOK
                      <span className='absolute rounded-2xl bottom-[-12px] left-0 w-full h-1 bg-black dark:bg-white transform origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100 '></span>
                  </span>
              
              </Link>
            </div>

            <div className='lg:text-3xl relative'>

              <Link href={"checkIn"}>
              <span className='hover:scale-110 transition-all duration-300 group'>
                  CHECK IN
                  <span className='absolute rounded-2xl bottom-[-12px] left-0 w-full h-1 bg-black dark:bg-white transform origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100'></span>
              </span>
              </Link>
            </div>

            </Fade>
          </div>
        </div>
     
    </main>
    </div>
  );
}


