module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
        width: theme => ({
            160: '40rem',
        }),
        colors: {
            primary: {
                default: "#17B897",
                "050": "#F0FCF9",
                "100": "#C6F7E9",
                "200": "#8EEDD1",
                "300": "#5FE3C0",
                "400": "#2DCCA7",
                "500": "#17B897",
                "600": "#079A82",
                "700": "#048271",
                "800": "#016457",
                "900": "#004440",
            },
            neutral: {
                default: "#616E7C",
                "050": "#F5F7FA",
                "100": "#E4E7EB",
                "200": "#CBD2D9",
                "300": "#9AA5B1",
                "400": "#7B8794",
                "500": "#616E7C",
                "600": "#52606D",
                "700": "#3E4C59",
                "800": "#323F4B",
                "900": "#1F2933",
            }
        }
    }
  },
  variants: {},
  plugins: []
}