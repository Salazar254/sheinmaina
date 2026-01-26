import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "Summer Vlog", category: "YouTube", gradient: "from-orange-500 to-red-500" },
    { id: 2, title: "Fashion Week", category: "Instagram", gradient: "from-purple-500 to-indigo-500" },
    { id: 3, title: "Travel Diary", category: "Vlog", gradient: "from-blue-500 to-cyan-500" },
    { id: 4, title: "Brand Collab", category: "Commercial", gradient: "from-pink-500 to-rose-500" },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-6 bg-black/40">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white">My <span className="text-purple-400">Portfolio</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of my latest works, collaborations, and digital content.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[300px] rounded-3xl overflow-hidden glass-card cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="text-sm font-medium text-white/60 mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-24 transition-all duration-300" />
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                                    View Project
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
