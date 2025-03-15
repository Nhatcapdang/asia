'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Tasp } from '../../public'
import Container from './container'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Nav } from './Nav/Index'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Svg from '../../public/svg'
import LocaleSwitcher from './LocaleSwitcher'

export const MENU = [
  {
    href: '/',
  },
  {
    href: '/about-us',
  },
  {
    href: '/services',
  },
  {
    href: '/team',
  },
]
export default function Header() {
  const pathname = usePathname()
  const isActive = useCallback((href: string) => pathname === href, [pathname])
  const locale = useLocale()
  console.log(locale)
  const t = useTranslations()

  return (
    <header className=" bg-asia-1  bg-opacity-70 sticky w-full top-0 z-50 shadow-3xl">
      <Container>
        <div className="h-[72px]">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link href="/" locale={locale} className="font-bold">
                LOGO SAMPLE
              </Link>
            </div>
            <Nav />
            <div className="hidden min-[969px]:block h-full  flex-auto">
              <ul className="text-[14px] font-bold flex group h-full items-center overflow-hidden">
                {MENU.map((item, idx) => (
                  <li
                    key={idx}
                    className={clsx('h-full flex items-center relative', {})}
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        'tracking-wider px-[22px] py-2 cursor-pointer text-white/60 hover:text-asia-3 duration-300'
                      )}
                      locale={locale}
                    >
                      {t.raw('head_menu')[idx]}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="pill-tab"
                          transition={{
                            type: 'spring',
                            duration: 0.5,
                            stiffness: 100,
                            damping: 20,
                          }}
                          className="absolute inset-0 border-t-[5px]  border-tsap-3 -z-10"
                        ></motion.span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden min-[969px]:flex  items-center space-x-4">
              <SlideArrowButton />
              {[<Svg.ArrowImg />, <Svg.Dolphin />, <Svg.Aim />].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="[&_svg>path]:hover:fill-asia-2 cursor-pointer"
                  >
                    {item}
                  </div>
                )
              )}
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
interface SlideArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  primaryColor?: string
}

export function SlideArrowButton({
  text = 'Contactez-nous',
  primaryColor = '#f2542d',
  className = '',
  ...props
}: SlideArrowButtonProps) {
  return (
    <button
      className={`group relative rounded-full  p-1 text-xl font-semibold ${className} `}
      {...props}
    >
      <div
        className="group absolute  right-0 top-0 flex h-full w-9 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-[5px] text-white transition-all duration-200 ease-in-out">
          <Svg.ArrowUpRight />
        </span>
      </div>
      <span className="relative  whitespace-nowrap pr-9 font-semibold text-black transition-all duration-200 ease-in-out -right-[9px]  group-hover:text-white opacity-0 group-hover:opacity-100">
        {text}
      </span>
    </button>
  )
}
