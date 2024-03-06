'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const SectionHeading = () => {
    const path = usePathname();

    const headings = {
        health : 'my health dashboard',
        learnings : 'learnings',
        account : 'my account',
    }

    let basePath = '/' ; 
    if(path.includes('health')){
      basePath = 'health'
    }
    else if(path.includes('learnings')){
      basePath = 'learnings'
    }
    else if(path.includes('account')){
      basePath = 'account'
    }

  return (
    <div>
      <h1 className='text-3xl font-semibold capitalize'>{headings[basePath]}</h1>
    </div>
  )
}

export default SectionHeading
