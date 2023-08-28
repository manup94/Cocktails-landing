'use client'
import { useState } from "react";

export function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className="bg-[#5e323a]   p-3 flex flex-col md:flex-row items-center">
            <div className="flex items-center ">
                <img src="/images/logo.png" className="w-1/5" alt="origin-logo" />
                <button
                    className="md:hidden ml-auto"
                    onClick={toggleMenu}
                >
                    <img className="w-6" src="/images/menu.png" alt="menu-icon" />
                </button>
            </div>
            <div className={`w-2/3 font-semibold md:flex  align-middle md:items-center md:justify-between md:flex-row md:space-x-4 text-[#e4e0cf] text-left md:space-y-0 space-y-2 mt-4 md:mt-0 ${menuOpen ? "block" : "hidden"}`}>
                <p className="hover:cursor-pointer text-left  hover:text-[#faf3e4]   md:mx-2 my-1">Cocktails y mas</p>
                <p className="hover:cursor-pointer text-left hover:text-[#faf3e4]  md:mx-2 my-1">Experiencia Origin</p>
                <p className="hover:cursor-pointer text-left hover:text-[#faf3e4]    md:mx-2 my-1">Reservas</p>
                <p className="hover:cursor-pointer text-left hover:text-[#faf3e4]  md:mx-2 my-1">Nuestro equipo</p>
            </div>
        </div>


    )
}
