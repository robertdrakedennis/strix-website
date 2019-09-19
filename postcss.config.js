module.exports = {
    plugins: [
        require("tailwindcss"),
        require("@fullhuman/postcss-purgecss")({
            content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
            defaultExtractor: content =>
                content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
        require("autoprefixer"),
        require("cssnano")
    ]
};