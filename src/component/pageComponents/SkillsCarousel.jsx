"use client";

import useScreenSize from "@/lib/hooks/screenSizeHook";
import Image from "next/image";

export default function SkillCarousel({ duration, datas, orientation = "horizontal", width = 50, height = 50 }) {
    const items = [...datas, ...datas];
    const totalDuration = (duration / 1000) * (datas.length / 5);
    const isVertical = orientation === "vertical";

    return (
        <>
            <style>{`
                @keyframes skill-marquee-x {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes skill-marquee-y {
                    0%   { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
            `}</style>
            <div className={`overflow-hidden ${isVertical ? "h-full" : "w-full"}`}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: isVertical ? "column" : "row",
                        gap: "10px",
                        ...(isVertical ? { height: "max-content" } : { width: "max-content" }),
                        animation: `${isVertical ? "skill-marquee-y" : "skill-marquee-x"} ${totalDuration}s linear infinite`,
                        willChange: "transform",
                    }}
                >
                    {items.map((logo, i) => (
                        <div key={i} className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform">
                            <Image src={logo} alt="Skill" width={width} height={height} className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
