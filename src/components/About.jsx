import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-sky-400 font-mono text-xl">01.</span>
                        <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
                        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-4">
                            <p>
                                I am an experienced <strong className="text-sky-400">System Administrator</strong> with a passion for building robust infrastructure and automating complex workflows.
                                My expertise spans across <strong className="text-sky-400">VoIP systems, Virtualization (Proxmox), and Linux Administration</strong>.
                            </p>
                            <p>
                                I enjoy bridging the gap between operations and development, using <strong className="text-sky-400">Python</strong> and web technologies to create internal tools that streamline processes.
                                Whether it's managing a call center's dialer infrastructure or securing a corporate network, I focus on reliability, security, and efficiency.
                            </p>
                        </div>

                        {/* Optional Image Placeholder or Tech Stack Cloud */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-sky-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                            <div className="relative bg-slate-800 p-6 rounded border border-slate-700 h-full flex items-center justify-center">
                                <span className="font-mono text-sky-400 text-6xl font-bold">&lt;/&gt;</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
