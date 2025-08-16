'use client'

import Link from "next/link";
import {IoMenuSharp} from "react-icons/io5";
import { useState } from "react";

const links = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Team",
    url: "/team"
  },
  {
    text: "Volunteers",
    url: "/volunteers"
  },
  {
    text: "Tribute",
    url: "/tribute"
  },
  {
    text: "Donate",
    url: "/donate"
  }
]

export default function Nav () {

  const [drawerOpen, setDrawer] = useState(false);

  const handleDrawerClose = () => {
    setTimeout(() => {
      setDrawer(false);
    }, 500);
  }

  return (
    <>
      <nav>
        <div className={'h-[75px] bg-primary flex items-center shadow justify-between px-4 lg:px-8 py-2 text-white '}>
          <div className=" items-center text-lg font-bold">KERRS</div>
          <div className={'hidden flex-1 md:flex justify-center items-center text-sm lg:text-base'}>
            { links.map((link) =>
              <Link
                href={link.url}
                key={link.url}
                className={`font-bold flex-1 max-w-[100px] mx-4 text-center relative after:transition
                    after:absolute after:w-full after:right-[100%] after:h-[2px] after:top-[100%] after:left-0 after:bg-highlight after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:after:origin-right
                    `}
              >
                {link.text}
              </Link>
            )}              
          </div>
          <button className={'block md:hidden'} onClick={() => setDrawer(true)}>
            <IoMenuSharp className={'w-6 h-6 mr-2'}/>
          </button>  
        </div>            
      </nav>

      {/* Side Drawer */}
      <div
        onClick={handleDrawerClose}
        className={`fixed text-white z-40 w-screen h-screen transition-opacity duration-500 
                    ${drawerOpen ? 'opacity-100 bg-[rgba(0,0,0,0.4)]' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className={`fixed z-10 right-0 top-0 bg-gray-900 h-full w-[220px] 
                      transition-transform duration-500 ease-in-out shadow-lg
                      ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between h-[75px] pl-3.5 bg-green">
            <Link href={`/`} className={'flex items-center font-bold text-lg'}>KERRS</Link>
            <button aria-label="Close Menu" onClick={handleDrawerClose}>
              <IoMenuSharp className={'w-6 h-6 mr-6 '}/>
            </button>
          </div>

          {links.map(link => (
            <Link
              href={link.url}
              key={link.url}
              className="w-full px-4 py-3 float-left hover:text-highlight"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}