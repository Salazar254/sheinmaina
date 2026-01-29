import React from 'react';

const Logo = ({ className = "h-10 w-auto", light = false }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative flex items-center justify-center w-10 h-10">
                {/* Logo Icon / Monogram */}
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform hover:rotate-12 transition-transform duration-300">
                    <rect width="40" height="40" rx="12" fill={light ? "white" : "#ec4899"} className="shadow-lg" />
                    <path
                        d="M12 28C12 28 14 20 20 20C26 20 28 28 28 28M12 12C12 12 14 20 20 20C26 20 28 12 28 12"
                        stroke={light ? "#ec4899" : "white"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="20" cy="20" r="3" fill={light ? "#ec4899" : "white"} />
                </svg>
            </div>

            <div className="flex flex-col -space-y-1">
                <span className={`text-xl font-black tracking-tighter ${light ? "text-white" : "text-gray-900"}`}>
                    SHEIN<span className={light ? "text-pink-200" : "text-pink-500"}>MAINA</span>
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${light ? "text-pink-100/60" : "text-gray-400"}`}>
                    Legacy & Advocacy
                </span>
            </div>
        </div>
    );
};

export default Logo;
