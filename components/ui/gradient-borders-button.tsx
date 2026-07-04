'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GradientBordersButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

export default function GradientBordersButton({ className, children, href = "#offer", ...props }: GradientBordersButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-block cursor-pointer rounded-full border-none bg-[#1c1c1e] p-0.5 text-xs leading-6 font-semibold text-white no-underline outline-none',
        className
      )}
      {...props}
    >
      <span className='absolute inset-0 overflow-hidden rounded-full'>
        <span className='absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(255,144,99,1)_0%,rgba(255,109,41,0.7)_75%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100' />
      </span>
      <div className='relative z-10 flex h-10 items-center space-x-2 rounded-full bg-[#0a0a0a] px-6 text-white ring-1 ring-white/10'>
        <span className='font-semibold text-sm'>{children || 'Quero o Caption Flow'}</span>
        <span className='inline-block transition-transform duration-700 group-hover:translate-y-1' style={{ animation: 'arrowBounce 1.6s ease-in-out infinite' }}>↓</span>
      </div>
      <span className='absolute bottom-0 left-[18px] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-opacity duration-500 opacity-40 group-hover:opacity-80' />
    </a>
  )
}
