import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Music, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-50/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-100/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-100/30 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Let's <span className="text-pink-500">Collaborate</span></h2>
                            <p className="text-gray-500 text-lg font-light leading-relaxed">
                                Interested in the Shein Maina Foundation, a professional collaboration, or just want to say hello? I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
                                    <p className="text-lg font-bold text-gray-900">contact@sheinmaina.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">LinkedIn</p>
                                    <a href="https://ke.linkedin.com/in/shein-maina-116932297" target="_blank" className="text-lg font-bold text-gray-900 hover:text-pink-500 transition-colors underline decoration-pink-100 decoration-4 underline-offset-4">shein-maina</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-bold text-gray-900">Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <a href="https://ke.linkedin.com/in/shein-maina-116932297" target="_blank" className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-blue-700 hover:shadow-lg transition-all"><Linkedin size={24} /></a>
                            <a href="https://www.instagram.com/_sheinmaina" target="_blank" className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-pink-500 hover:shadow-lg transition-all"><Instagram size={24} /></a>
                            <a href="https://www.youtube.com/@SHEINMAINA" target="_blank" className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:shadow-lg transition-all"><Youtube size={24} /></a>
                            <a href="https://www.tiktok.com/@sheinmaina" target="_blank" className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-black hover:shadow-lg transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-pink-100 shadow-2xl shadow-pink-100/50 relative overflow-hidden"
                    >
                        <form className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-pink-500 focus:bg-white transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-pink-500 focus:bg-white transition-all" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-pink-500 focus:bg-white transition-all" placeholder="How can I help you?" />
                            </div>
                            <Button className="w-full h-16 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-black text-xl shadow-lg shadow-pink-200 transition-all border-none">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
