import { motion } from "framer-motion";
import { Star, Trophy } from "lucide-react";

const Pageants = () => {
    const achievements = [
        {
            title: "Miss KCA University",
            role: "2nd Runner Up 2025/26",
            description: "Representing intelligence and compassion within the university community."
        },
        {
            title: "Beauty of Africa",
            role: "International Pageant Kenya 2023 Participant",
            description: "Competing at a national level to promote African culture and beauty."
        },
        {
            title: "Miss Face of Kenya 2025",
            role: "Current Participant",
            description: "Advocating for empowerment and leadership through grace and confidence."
        }
    ];

    return (
        <section id="pageants" className="py-24 px-6 bg-gray-50/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Grace, Leadership & <span className="text-pink-500">Achievements</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Celebrating the platform of pageantry as a vehicle for personal growth, community service, and female empowerment.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[450px] rounded-[3rem] overflow-hidden bg-white border border-pink-100 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="h-1/2 bg-pink-50 flex items-center justify-center relative group overflow-hidden">
                                {index === 0 ? (
                                    <img
                                        src="/images/pageant_achievement.jpeg"
                                        alt="Pageant Achievement"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <Star size={64} className="text-pink-200 group-hover:scale-125 transition-transform duration-500" />
                                )}
                                <div className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur rounded-2xl z-20"><Trophy size={20} className="text-pink-500" /></div>
                            </div>
                            <div className="h-1/2 p-8 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-gray-900 leading-[1.1]">{item.title}</h3>
                                    <p className="text-pink-600 font-bold text-sm tracking-widest uppercase">{item.role}</p>
                                </div>
                                <p className="text-gray-600 font-light text-sm italic border-t border-pink-50 pt-4 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pageants;
