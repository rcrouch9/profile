'use client';
import { colors } from "../app/constants/colors";

export default function ColorScale() {

    const setTheme = (primary_hex: string, secondary_hex: string, tertiary_hex: string) => {
        document.documentElement.style.setProperty('--primary-color', primary_hex);
        document.documentElement.style.setProperty('--secondary-color', secondary_hex);
        document.documentElement.style.setProperty('--tertiary-color', tertiary_hex);
    };

    return (
        <div className="flex flex-col space-y-4">
            {
                colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setTheme(color.primary_hex, color.secondary_hex, color.tertiary_hex)}
                        className="h-8 w-8 rounded-full border-2 border-transparent hover:border-gray-300 transition-all active:scale-90 pointer-events-auto cursor-pointer"
                        style={{ backgroundColor: color.primary_hex}}
                        title={color.name}
                    />
                ))
            }
        </div>
    );
}