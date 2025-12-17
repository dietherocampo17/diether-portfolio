import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 text-center">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sky-400 font-mono text-lg mb-4">04. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>

                    <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                        I'm currently open to new opportunities in System Administration, DevOps, and Infrastructure Engineering.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors hover:-translate-y-1 transform duration-300">
                            <Linkedin size={32} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors hover:-translate-y-1 transform duration-300">
                            <Github size={32} />
                        </a>
                    </div>

                    <a
                        href="mailto:ocamdiether254@gmail.com"
                        className="inline-block px-8 py-4 border border-sky-400 text-sky-400 font-mono rounded hover:bg-sky-400/10 transition-all"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
