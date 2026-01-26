import { motion } from "framer-motion";
import { Heart, ShieldCheck, Zap } from "lucide-react";

const Foundation = () => {
    return (
        <section id="advocacy" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Shein Maina <span className="text-pink-500">Foundation</span></h2>
                    <div className="relative w-full h-64 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src="/shein_foundation_advocacy_1769416048947.png"
                            alt="Advocacy and Empowerment"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                            <p className="text-white text-lg md:text-xl font-medium tracking-tight text-left">Empowering Kenyan communities through awareness and action.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 rounded-[2.5rem] bg-pink-50 border border-pink-100 flex flex-col items-center text-center space-y-6"
                    >
                        <div className="p-4 bg-white rounded-3xl shadow-sm text-pink-500"><Heart size={40} /></div>
                        <h3 className="text-2xl font-bold text-gray-900">GBV Prevention</h3>
                        <p className="text-gray-600 font-light lowercase tracking-wider">Advocating for the end of gender-based violence through education and support networks.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 rounded-[2.5rem] bg-rose-50 border border-rose-100 flex flex-col items-center text-center space-y-6"
                    >
                        <div className="p-4 bg-white rounded-3xl shadow-sm text-rose-500"><ShieldCheck size={40} /></div>
                        <h3 className="text-2xl font-bold text-gray-900">Health Awareness</h3>
                        <p className="text-gray-600 font-light lowercase tracking-wider">Promoting breast cancer awareness and regular screenings to save lives.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 rounded-[2.5rem] bg-pink-50 border border-pink-100 flex flex-col items-center text-center space-y-6"
                    >
                        <div className="p-4 bg-white rounded-3xl shadow-sm text-pink-500"><Zap size={40} /></div>
                        <h3 className="text-2xl font-bold text-gray-900">Youth Advocacy</h3>
                        <p className="text-gray-600 font-light lowercase tracking-wider">Empowering the youth to be delegates of peace, change, and community development.</p>
                    </motion.div>
                </div>

                <div className="mt-20 p-12 rounded-[3.5rem] glass-panel border-pink-100 text-center space-y-8 relative overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Heart size={200} fill="currentColor" className="text-pink-200" /></div>
                    <h3 className="text-3xl font-black text-gray-900">Join the Mission</h3>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        We believe in a world where intelligence, compassion, and empowerment are the standard. Be part of the change today.
                    </p>
                    <button className="px-12 py-4 rounded-full bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                        Inquire About the Foundation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Foundation;
