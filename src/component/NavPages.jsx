"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IconHamburger, IconX } from '@intentui/icons'
import { useState } from "react"
import VinLogo from "./pageAssets/VinLogo"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavPages({ addStyle }) {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ menuActive, setMenuActive ] = useState(0);

    const handleMenuClick = (menuNo) => {
        setMenuActive(menuNo);
        setOpenMenu(false);
    }

    const menuItems = [
        { label: 'Home', dir: '/' },
        { label: 'About', dir: '/detail/about' },
        { label: 'Projects', dir: '/detail/project' },
        { label: 'Contact', dir: '/#contact' },
    ];

    const pathname = usePathname();
    const getBackPath = () => {        
        const segments = pathname.split('/').filter(Boolean);
        const newPath = '/' + segments.slice(0, -1).join('/');
        if (newPath === '/detail') {
            return '/'
        }
        return newPath || '/';
    };
    const backPath = getBackPath();

    return(
        <div className={`flex justify-between items-center px-5 py-3 fixed w-full z-50 backdrop-blur-lg ${addStyle}`}>
            <Link href={backPath}>
                <VinLogo style={"fill-black w-10"}/>
            </Link>

            <IconHamburger onClick={() => setOpenMenu(true)} className="w-8 h-8 cursor-pointer"/>
            <AnimatePresence>
                {
                    openMenu && 
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{opacity: openMenu ? 1 : 0}}
                            exit={{opacity:0}}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="absolute w-full h-screen left-1/2 transform -translate-x-1/2 top-0 flex flex-col items-center justify-center bg-black"
                        >
                            <VinLogo style={"absolute top-5 left-5 fill-white w-10"}/>
                            <IconX onClick={() => setOpenMenu(false)} className="absolute top-5 right-5 w-8 h-8 cursor-pointer text-white"/>
                            <ul className="flex flex-col gap-8 text-xl">
                               {menuItems.map((item, idx) => (
                                    <Link href={item.dir} key={idx}>
                                        <motion.li
                                            initial={{ opacity: 0, y:20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => handleMenuClick(idx)}
                                            className={`text-center text-2xl cursor-pointer select-none ${menuActive === idx ? 'font-bold text-white' : 'text-textSec'}`}
                                        >
                                            {item.label}
                                        </motion.li>
                                    </Link>
                                    
                               ))}
                            </ul>
                        </motion.div>
                }
            </AnimatePresence>
        </div>

    )
}