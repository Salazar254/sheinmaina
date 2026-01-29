import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-panel border-pink-100 relative group shadow-2xl">
                            <img
                                src="/images/lifestyle_tennis.jpeg"
                                alt="Shein Maina Lifestyle"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute inset-4 border border-white/30 rounded-[2rem] transition-transform duration-500 group-hover:scale-95" />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Determined, Compassionate & <span className="text-pink-500">Versatile</span></h2>
                            <div className="w-20 h-1.5 bg-pink-500 rounded-full" />
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            I am Shein Maina, a Bachelor of Commerce student at KCA University specializing in Accounting. Beyond the numbers, my life is driven by a deep commitment to public health advocacy and international diplomacy.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            As a content creator, I share my journey on YouTube—from the rigor of CPA exams to the grace of beauty pageants and the precision of the tennis court. I believe in holistic self-improvement and emotional intelligence as keys to impactful leadership.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-6 rounded-2xl bg-pink-50 border border-pink-100/50">
                                <h4 className="text-pink-600 font-bold text-lg mb-1">Advocacy</h4>
                                <p className="text-gray-500 text-sm italic">Ending GBV & Breast Cancer Awareness</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h4 className="text-gray-800 font-bold text-lg mb-1">Lifestyle</h4>
                                <p className="text-gray-500 text-sm italic">Tennis, Church & Personal Vlogs</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
