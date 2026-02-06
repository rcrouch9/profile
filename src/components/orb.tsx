export default function Orb() {
    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";
    const teriaryColor = "var(--tertiary-color)";

    return (
        <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[1000px] 
        h-[700px]
        bg-gradient-to-tr
        from-[var(--secondary-color)]
        via-[var(--tertiary-color)]
        to-[var(--primary-color)]
        rounded-full 
        blur-3xl 
        opacity-30 
        animate-blob 
        animation-delay-2000 
        -z-10"
        />
    )
}