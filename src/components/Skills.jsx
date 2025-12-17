import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Phone, HardDrive, Activity, Shield, Code } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: "Infrastructure",
            icon: <Server size={32} />,
            items: ["Proxmox VE (VM & LXC)", "Backup & Restore", "Resource Optimization", "Bare-metal Admin"]
        },
        {
            category: "Operating Systems",
            icon: <Terminal size={32} />,
            items: ["Linux (Ubuntu, Debian)", "Windows Server (AD DS)", "Bash & Python Scripting", "Systemd & Cron"]
        },
        {
            category: "VoIP Systems",
            icon: <Phone size={32} />,
            items: ["Yeastar P-Series", "VICIdial & GoAutoDial", "Asterisk & FreePBX", "SIP Trunking & IVR"]
        },
        {
            category: "Storage",
            icon: <HardDrive size={32} />,
            items: ["Synology NAS", "SMB & Permissions", "Data Replication", "AD Integration"]
        },
        {
            category: "Monitoring",
            icon: <Activity size={32} />,
            items: ["Zabbix", "Tactical RMM", "GLPI Asset Mgmt", "Endpoint Monitoring"]
        },
        {
            category: "Security",
            icon: <Shield size={32} />,
            items: ["Sophos MDR", "Firewall (UFW)", "Server Hardening", "Incident Response"]
        },
        {
            category: "Development",
            icon: <Code size={32} />,
            items: ["Python (Automation)", "Flask & Jinja2", "HTMX & SQLAlchemy", "Internal Dashboards"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-slate-900/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-sky-400 font-mono text-xl">02.</span>
                        <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
                        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700 hover:border-sky-400/50 hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-100 mb-4">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm font-mono">
                                            <span className="text-sky-400 mt-1">▹</span>
                                            {item}
                                        </li>
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

export default Skills;
