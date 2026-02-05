'use client';
import { motion } from "framer-motion";
import { House, ChartNoAxesColumnIncreasing, Ellipsis } from "lucide-react";
import ColorScale from "./colorScale";

export default function Menu() {
    const primaryColor = "var(--primary-color)";

    const linkTiles = [
        { label: "Home", href: "/", icon: <House size={24}/> },
        { label: "Leaderboard", href: "/leaderboard", icon: <ChartNoAxesColumnIncreasing size={24}/> },
        { label: "More", href: null, icon: <Ellipsis size={24}/>, isMore: true },
    ];

    return (
        <div className="fixed top-8 left-8 z-[100] flex flex-col items-start gap-3">
            {linkTiles.map((tile, i) => (
                <motion.div
                    key={i}
                    initial="initial"
                    whileHover="hovered"
                    className="relative flex flex-col items-center pointer-events-auto"
                >
                    <motion.a
                        href={tile.href ?? "#"}
                        target={"_self"}
                        style={{ borderColor: primaryColor }}
                        className="h-18 w-18 rounded-md border-2 bg-white flex items-center justify-center pointer-events-auto cursor-pointer relative z-20"
                        variants={{
                            initial: { 
                                scale: 1, 
                                backgroundColor: "#ffffff", 
                                color: primaryColor
                            },
                            hovered: {
                                scale: 1.1,
                                backgroundColor: primaryColor,
                                color: "#ffffff"
                            }
                        }}
                    >
                        {tile.icon}
                    </motion.a>

                    {tile.isMore && (
                        <motion.div
                            variants={{
                                initial: { height: 0, opacity: 0, y: 0 },
                                hovered: { height: 230, opacity: 1, y: 0 }
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 40 }}
                            style={{ borderColor: primaryColor }}
                            className="absolute top-full w-18 bg-white border-2 rounded-md flex flex-col items-center py-4 shadow-xl overflow-hidden z-10"
                        >
                            <ColorScale />
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}