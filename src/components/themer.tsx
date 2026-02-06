"use client";

import { useEffect } from "react";
import { colors } from "../app/constants/colors";

export default function Themer() {
    const primary_colors = colors.map(c => c.primary_hex);
    const secondary_colors = colors.map(c => c.secondary_hex);
    const tertiary_colors = colors.map(c => c.tertiary_hex);

    useEffect(() => {

        const random_index = Math.floor(Math.random() * primary_colors.length);

        document.documentElement.style.setProperty('--primary-color', primary_colors[random_index]);
        document.documentElement.style.setProperty('--secondary-color', secondary_colors[random_index]);
        document.documentElement.style.setProperty('--tertiary-color', tertiary_colors[random_index]);

    }, []);

    return null;
}