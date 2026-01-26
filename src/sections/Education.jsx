import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const Education = () => {
    const education = [
        {
            title: "Bachelor of Commerce (Accounting)",
            institution: "KCA University",
            period: "Current",
            description: "Specializing in Accounting with focus on financial management and strategic planning."
        },
        {
            title: "CPA Certification",
            institution: "KASNEB",
            period: "In Progress",
            description: "Pursuing Certified Public Accountant qualification to deepen financial expertise."
        }
    ];

    const skills = [
        "Accounting & Finance", "Public Speaking", "Advocacy",
        "Content Creation", "Customer Service", "Diplomacy",
        "Emotional Intelligence", "Strategic Communication"
    ];

    return (
        <section id="education" className="py-24 px-6 bg-gray-50/50 relative">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-pink-100 rounded-xl text-pink-600"><GraduationCap size={32} /></div>
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Education</h2>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-pink-100">
                            {education.map((item, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-pink-500 z-10" />
                                    <div className="space-y-2">
                                        <span className="text-pink-500 font-bold text-sm tracking-widest uppercase">{item.period}</span>
                                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-500 font-medium">{item.institution}</p>
                                        <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-200 rounded-xl text-gray-800"><Award size={32} /></div>
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Core Skills</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="text-pink-500" size={20} />
                                    <span className="text-gray-700 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-400 text-white shadow-xl shadow-pink-100">
                            <h4 className="text-xl font-bold mb-2">Aspiring Diplomat</h4>
                            <p className="text-pink-100 font-light leading-relaxed">
                                Combining accounting precision with diplomatic tact to serve as a Deputy Communications Director and future delegate.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
