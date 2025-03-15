import * as React from 'react'
import { motion } from 'framer-motion'
import { MENU } from '../header'
import MenuItem from './MenuItem'
import { useTranslations } from 'next-intl'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    background: '#562c2c',
    height: '100vh',
    y: 0,
    opacity: 1,
    display: 'block',
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    background: '#562c2c',
    height: '20vh',
    y: 50,
    opacity: 0,
    display: 'none',
  },
}

export const Navigation = ({ toggle }: any) => {
  const t = useTranslations()
  return (
    <motion.div
      variants={variants}
      className=" absolute -top-[16px] -right-[16px] max-xs:w-[100vw] w-[430vw] max-w-[430px] -z-10 flex justify-center items-center"
    >
      <motion.ul className="w-full overflow-hidden mt-16">
        {MENU.map((item, idx) => (
          <MenuItem
            {...item}
            key={idx}
            toggle={toggle}
            title={t.raw('head_menu')[idx]}
          />
        ))}
      </motion.ul>
    </motion.div>
  )
}
