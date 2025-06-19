"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Optional icons for mobile menu

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold">My Website</div>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
                        <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
                        <Link href="/service" className="hover:text-yellow-300 transition">Services</Link>
                        <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {isOpen && (
                    <div className="md:hidden space-y-2 pb-4">
                        <Link href="/" className="block hover:text-yellow-300">Home</Link>
                        <Link href="/about" className="block hover:text-yellow-300">About</Link>
                        <Link href="/service" className="block hover:text-yellow-300">Services</Link>
                        <Link href="/contact" className="block hover:text-yellow-300">Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
