import { motion } from "framer-motion";
import { Briefcase, Users, HeartHeader, Heart } from "lucide-react";

const Experience = () => {
    const roles = [
        {
            title: "Founder",
            company: "Shein Maina Foundation",
            description: "Leading public health awareness initiatives, focusing on ending GBV and promoting breast cancer awareness."
        },
        {
            title: "Deputy Communications Director",
            company: "Diplomacy & Delegate Services",
            description: "Managing communications strategy and serving as a delegate for national and youth leadership programs."
        },
        {
            title: "Customer Care Specialist",
            company: "Expert Services",
            description: "Delivering exceptional customer experiences with a focus on problem-solving and relationship management."
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">Professional <span className="text-pink-500">Journey</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                        A diverse path spanning financial expertise, diplomatic service, and transformative social advocacy.
                    </p>
                </motion.div>

                <div className="grid gap-12">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative grid md:grid-cols-[1fr,2fr] gap-8 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500"
                        >
                            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
                                <div className="p-4 rounded-3xl bg-white border border-gray-100 shadow-sm text-pink-500 group-hover:scale-110 transition-transform">
                                    <Briefcase size={40} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 leading-tight">{role.title}</h3>
                                    <p className="text-pink-500 font-bold tracking-widest text-xs uppercase pt-1">{role.company}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-gray-600 text-lg leading-relaxed font-light">
                                    {role.description}
                                </p>
                            </div>
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Heart size={100} className="text-pink-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
