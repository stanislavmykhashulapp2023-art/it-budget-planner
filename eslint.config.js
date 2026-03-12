import js from "@eslint/js";

export default [
    js.configs.recommended, // Базові правила ESLint
    {
        languageOptions: {
            globals: {
                window: "readonly",
                document: "readonly",
                import: "readonly",
                console: "readonly",
                alert: "readonly" 
            }
        },
        rules: {
            "no-unused-vars": "warn", // Попереджати про змінні, які не використовуються
            "no-undef": "error"       // Помилка, якщо змінна не оголошена
        }
    }
];