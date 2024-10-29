import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
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
                    },
                },
            },
        },
    },

    plugins: [forms, typography],
};
