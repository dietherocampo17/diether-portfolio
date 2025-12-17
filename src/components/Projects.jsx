import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "TTS Broadcasting System",
            desc: "Automated broadcasting system using GoAutoDial & VICIdial. Features Excel-based lead upload, custom field mapping, and scheduled execution via cron.",
            tech: ["Asterisk", "Python", "Cron"],
            links: { github: "#", external: "#" }
        },
        {
            title: "VoIP Call Recording Archival",
            desc: "Robust archival system integrating Yeastar & Asterisk with NAS storage. Implements non-destructive backups and automated retention policies.",
            tech: ["Bash", "NAS", "SIP"],
            links: { github: "#", external: "#" }
        },
        {
            title: "Call Pop & CRM Integration",
            desc: "Real-time caller information display using Yeastar pop-up URL integration. Fetches data via API from GoAutoDial for immediate agent context.",
            tech: ["API", "Webhooks", "JS"],
            links: { github: "#", external: "#" }
        },
        {
            title: "User Access Management Tool",
            desc: "Internal web application for user registration and role-based access control. Delivers user data via API routes.",
            tech: ["Flask", "SQLAlchemy", "HTMX"],
            links: { github: "#", external: "#" }
        }
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-sky-400 font-mono text-xl">03.</span>
                        <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
                        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur p-8 rounded-lg border border-slate-700 hover:border-sky-400/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <Folder size={40} className="text-sky-400" />
                                    <div className="flex gap-4 text-slate-400">
                                        <a href={project.links.github} className="hover:text-sky-400 transition-colors"><Github size={20} /></a>
                                        <a href={project.links.external} className="hover:text-sky-400 transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                                    {project.desc}
                                </p>

                                <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500">
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
