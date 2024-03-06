'use client'
import React from "react";
import Link from "next/link";
import { sideNavOptions, tabs } from "../utils/allRoutes";

import { usePathname } from 'next/navigation'

const Sidenav = () => {
  const path = usePathname();
  
  let basePath = null ; 
  if(path.includes('health')){
    basePath = 'health'
  }
  else if(path.includes('learnings')){
    basePath = 'learnings'
  }
  else if(path.includes('account')){
    basePath = 'account'
  }
  // let currentPath = path.split("/").filter((i) => i !== "");

  // let subPath = currentPath[1] ;
  // const pageTabs = subPath ? subPath : currentPath[0] ;

  return (
    
      <nav className="w-60">
        <ul className="space-y-4">
          {sideNavOptions[basePath]?.map((nav) => (
            <li key={nav.title}>
              <Link href={nav.path} className={`flex gap-2 items-center p-2 rounded-md hover:bg-slate-100 font-semibold `}>
                {nav.icon}
                <span>{nav.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
   
  );
};

export default Sidenav;
