import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-slate-100 font-bold text-xl tracking-tighter hover:text-sky-400 transition-colors">
                    <Terminal size={24} className="text-sky-400" />
                    <span>Diether<span className="text-sky-400">.</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 text-sm font-medium text-slate-900 bg-sky-400 rounded hover:bg-sky-300 transition-colors"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-slate-300 hover:text-sky-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-sky-400 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
