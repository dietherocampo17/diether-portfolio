import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const roles = ["System Administrator", "VoIP Engineer", "Linux Enthusiast", "Automation Scripter"];
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            const fullRole = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(fullRole.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setCurrentRole(fullRole.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }

            if (!isDeleting && charIndex === fullRole.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Available for Hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Diether F. Ocampo
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8 h-16">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-bold">
                            {currentRole}
                        </span>
                        <span className="animate-pulse text-slate-600 ml-1">|</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        Specializing in <span className="text-slate-200">Infrastructure</span>, <span className="text-slate-200">VoIP Systems</span>, and <span className="text-slate-200">Automation</span>.
                        I bridge the gap between complex operations and reliable software solutions.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-sky-400 text-sky-400 font-mono rounded hover:bg-sky-400/10 transition-all flex items-center gap-2 group"
                        >
                            Get in Touch
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-mono rounded hover:shadow-lg hover:shadow-sky-500/25 transition-all"
                        >
                            View Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
