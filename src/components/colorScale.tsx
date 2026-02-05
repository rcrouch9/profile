'use client';

export default function ColorScale() {
    const colors = [
        { name: 'Blue', hex: '#3b83f6c0' },
        { name: 'Red', hex: '#ef4444c0' },
        { name: 'Green', hex: '#22c55ec0' },
        { name: 'Purple', hex: '#a855f7c0' },
        { name: 'Orange', hex: '#f97316c0' },
    ];

    const setTheme = (hex: string) => {
        document.documentElement.style.setProperty('--primary-color', hex);
    };

    return (
        <div className="flex flex-col space-y-4">
            {
                colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setTheme(color.hex)}
                        className="h-8 w-8 rounded-full border-2 border-transparent hover:border-gray-300 transition-all active:scale-90 pointer-events-auto cursor-pointer"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                    />
                ))
            }
        </div>
    );
}