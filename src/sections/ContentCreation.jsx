import { motion } from "framer-motion";
import { Youtube, Instagram, Linkedin } from "lucide-react";

const ContentCreation = () => {
    const categories = [
        { name: "LinkedIn", icon: <Linkedin />, handle: "shein-maina", color: "text-blue-700", desc: "Professional journey, advocacy, and network." },
        { name: "Instagram", icon: <Instagram />, handle: "@_sheinmaina", color: "text-pink-500", desc: "Lifestyle, Fashion, & Daily moments." },
        { name: "YouTube", icon: <Youtube />, handle: "@SHEINMAINA", color: "text-red-500", desc: "Vlogs, Day-in-the-life, EQ talks." },
        {
            name: "TikTok",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
            handle: "@sheinmaina",
            color: "text-gray-900",
            desc: "Quick recaps & creative snippets."
        }
    ];

    return (
        <section id="content" className="py-24 px-6 bg-white overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-none">Content <br /><span className="text-pink-500">Creation</span></h2>
                        <p className="text-gray-500 text-lg font-light leading-relaxed">
                            A authentic look into my multifaceted life as a student, advocate, and dreamer. Connecting through stories that matter.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.youtube.com/@SHEINMAINA" target="_blank" className="px-8 py-3 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-100 flex items-center gap-2">
                            <Youtube size={20} /> Subscribe
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`${cat.color} mb-6 transform group-hover:scale-125 transition-transform duration-500`}>
                                {cat.icon}
                            </div>
                            <div className="space-y-2 relative z-10">
                                <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                                <p className="text-pink-500 font-bold text-xs tracking-widest">{cat.handle}</p>
                                <p className="text-gray-500 text-sm font-light pt-2 leading-relaxed italic">{cat.desc}</p>
                            </div>
                            {/* Background Number */}
                            <span className="absolute -bottom-6 -right-2 text-8xl font-black text-gray-200/50 pointer-events-none group-hover:text-pink-100 transition-colors">
                                0{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentCreation;
