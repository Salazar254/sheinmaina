import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-12 text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <Logo light={true} />
                    <p className="text-gray-400 text-sm mt-4">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://ke.linkedin.com/in/shein-maina-116932297" target="_blank" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com/_sheinmaina" target="_blank" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                    <a href="https://www.youtube.com/@SHEINMAINA" target="_blank" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                    <a href="https://www.tiktok.com/@sheinmaina" target="_blank" className="hover:text-pink-200 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
