"use client"
import { IconHome, IconCodeBrackets, IconService, IconAcademicCap, IconContacts } from '@intentui/icons'
import { useState } from 'react'
import { motion, AnimatePresence  } from "framer-motion";


export default function NavSection({  }) {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ menuActive, setMenuActive ] = useState(0);

    const handleMenuClick = (menuNo) => {
        setMenuActive(menuNo);
    }
    
    return(
        <motion.ul
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
            animate={{x: openMenu ? -10 : 0}}
            initial={{x:0}}
            transition={{ type: "spring", duration: 0.2 }}
            className='fixed top-1/2 right-4 transform -translate-y-1/2 bg-secAccent text-white rounded-4xl px-3 py-7 flex flex-col gap-5'
        >
            {[
                { 
                    icon: <div className={`${menuActive == 0 && "bg-mainAccent text-black rounded-xl"} p-2`}> <IconHome className='w-5 h-5' /> </div>, 
                    label: 'Home' 
                },
                { 
                    icon: <div className={`${menuActive == 1 && "bg-mainAccent text-black rounded-xl"} p-2`}> <IconCodeBrackets className='w-5 h-5' /> </div>, 
                    label: 'Projects' 
                },
                { 
                    icon: <div className={`${menuActive == 2 && "bg-mainAccent text-black rounded-xl"} p-2`}> <IconService className='w-5 h-5' /> </div>, 
                    label: 'Services' 
                },
                { 
                    icon: <div className={`${menuActive == 3 && "bg-mainAccent text-black rounded-xl"} p-2`}> <IconAcademicCap className='w-5 h-5' /> </div>, 
                    label: 'Certs' 
                },
                { 
                    icon: <div className={`${menuActive == 4 && "bg-mainAccent text-black rounded-xl"} p-2`}> <IconContacts className='w-5 h-5' /> </div>, 
                    label: 'Contact' 
                },
            ].map(({ icon, label }, idx) => (
                <li onClick={() => handleMenuClick(idx)} key={idx} className='flex gap-3 items-center'>
                {icon}
                <AnimatePresence>
                    {openMenu && (
                    <motion.span
                        key="text"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        whileHover={{scale: 1.1}}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.2, delay: idx * 0.1 }}
                    >
                        <p className={`${openMenu && menuActive == idx && "font-bold "} select-none cursor-default`}>{label}</p>
                    </motion.span>
                    )}
                </AnimatePresence>
                </li>
            ))}
        </motion.ul>
    )
}
