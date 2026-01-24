import React from 'react';

const GalaxyBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-space-dark">
            {/* Nebula Blobs */}
            <div className="fixed top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[150px] animate-blob pointer-events-none" />
            <div className="fixed bottom-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[150px] animate-blob pointer-events-none" style={{ animationDelay: '-10s', animationDirection: 'reverse' }} />
            <div className="fixed top-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '-20s' }} />
            <div className="fixed bottom-[10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '-5s', animationDirection: 'reverse' }} />

            {/* Star Field */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-star"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 0.5}px`,
                            height: `${Math.random() * 3 + 0.5}px`,
                            animationDelay: `${Math.random() * 10}s`,
                            opacity: Math.random() * 0.8 + 0.2
                        }}
                    />
                ))}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`n-${i}`}
                        className={`absolute rounded-full animate-star ${i % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'}`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animationDelay: `${Math.random() * 7}s`,
                            opacity: 0.3,
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GalaxyBackground;
