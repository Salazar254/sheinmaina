import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-12 text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tighter">SHEIN<span className="text-purple-400">MAINA</span></h3>
                    <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-purple-400 transition-colors"><Youtube size={20} /></a>
                    <a href="#" className="hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
