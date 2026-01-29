import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-100/40 rounded-full blur-[120px]" />

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-100 shadow-sm text-sm font-semibold text-pink-600">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                        Available for Collaborations
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900">
                        Shein <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                            Maina
                        </span>
                    </h1>

                    <p className="text-gray-500 text-xl font-medium tracking-tight uppercase">
                        Founder | Advocate | Student | Content Creator
                    </p>

                    <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                        Dynamic BCom student, CPA candidate, and Founder of Shein Maina Foundation. Empowering change through advocacy, diplomacy, and authentic storytelling.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Button className="rounded-full h-14 px-10 text-lg bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-200 group border-none">
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <div className="flex items-center gap-4 px-2">
                            <a href="https://ke.linkedin.com/in/shein-maina-116932297" className="p-3 rounded-full bg-white border border-gray-100 text-gray-400 hover:text-blue-700 hover:shadow-md transition-all"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/_sheinmaina" className="p-3 rounded-full bg-white border border-gray-100 text-gray-400 hover:text-pink-500 hover:shadow-md transition-all"><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/@SHEINMAINA" className="p-3 rounded-full bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:shadow-md transition-all"><Youtube size={20} /></a>
                            <a href="https://www.tiktok.com/@sheinmaina" className="p-3 rounded-full bg-white border border-gray-100 text-gray-400 hover:text-black hover:shadow-md transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mx-auto mt-12 md:mt-0"
                >
                    <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[600px]">
                        {/* Decorative Background Frame */}
                        <div className="absolute inset-4 border-2 border-pink-200 rounded-[2rem] transform rotate-3" />

                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white p-2">
                            <div className="w-full h-full bg-gray-50 rounded-[1.5rem] flex items-center justify-center relative group overflow-hidden">
                                <img
                                    src="/images/hero_portrait.jpeg"
                                    alt="Shein Maina"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Floating Labels */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl border-pink-100/50 shadow-xl"
                        >
                            <p className="font-black text-2xl text-pink-600 leading-tight">Miss KCA<br /><span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Runner's Up 2025</span></p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -top-8 -left-8 glass-panel py-3 px-6 rounded-full border-pink-100/50 shadow-lg"
                        >
                            <p className="font-bold text-gray-800 text-sm">Founder @ Shein Foundation</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
