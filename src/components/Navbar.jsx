import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Advocacy", href: "#advocacy" },
        { name: "Content", href: "#content" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center",
                isScrolled ? "bg-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm py-3" : "bg-transparent"
            )}
        >
            <div className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
                <span className="text-pink-500 underline decoration-pink-200 decoration-4 underline-offset-4">SHEIN</span>
                <span className="text-gray-400 font-light">MAINA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 items-center">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-600 hover:text-pink-500 transition-colors text-xs font-semibold tracking-widest uppercase"
                    >
                        {link.name}
                    </a>
                ))}
                <Button variant="default" size="sm" className="rounded-full px-6 bg-pink-500 hover:bg-pink-600 text-white border-none">
                    Contact
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-[70px] bg-white/95 backdrop-blur-xl z-40 p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-800 hover:text-pink-500 text-xl font-bold tracking-tight"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="default" className="w-full bg-pink-500 text-white mt-4">
                        Get In Touch
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
