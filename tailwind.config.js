import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {

    experimental: {
        optimizeUniversalDefaults: true,
    },
    darkMode: "xyz0090",

    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["ElValle", "sans-serif"],
                ev: ["ElValle", "sans-serif"],
            },
            colors: {
                app: {
                    primary: {
                        //purple
                        DEFAULT: "#884fd7",
                        dark: "#0C0216",
                        glow: "#DFAEFF",
                        700: "#9842E8",
                    },

                    secondary: {
                        DEFAULT: "#5293d8",
                        glow: "#A1D6FF",
                        700: "#0E548E",
                        600: "#5aa1bf",
                    },
                },
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },

                float: {
                    "0%,10%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(15px, -15px)" },
                },
                float_y: {
                    "0%,100%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(0px, 15px)" },
                },

                float_reverse: {
                    "0%,100%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(-15px, -15px)" },
                },
                computer_scene_horizontal: {
                    "0%,100%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(15px, 10px)" },
                },
                computer_scene_laptop: {
                    "0%,100%": { transform: "translate(0, 0)" },
                    // "50%": { transform: "translate(5px, 20px)" },
                    "50%": { transform: "translate(0px, 15px)" },
                },
            },
            animation: {
                "float-y": "float_y 3s linear infinite",
                float: "float 5s linear infinite",
                "float-reverse": "float_reverse 5s linear infinite",
                "computer-scene-horizontal":
                    "computer_scene_horizontal 5s linear infinite",
                "computer-scene-laptop":
                    "computer_scene_laptop 5s linear infinite",
                slowping: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',

            },
        },
    },

    plugins: [forms, typography, require("tailwindcss-animation-delay")],
};
