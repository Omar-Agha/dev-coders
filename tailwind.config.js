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
                        DEFAULT: "#884fd7",
                        dark: "#0C0216",
                    },
                    secondary: "#5293d8",
                    
                },
            },
        },
    },

    plugins: [forms, typography],
};
