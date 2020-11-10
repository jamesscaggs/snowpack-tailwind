const { colors, fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["src/**/*.js"],
  theme: {
    extend: {
      colors: {
        indigo: {
          ...colors.indigo,
          lighter: colors.indigo[100],
          default: colors.indigo,
          dark: "#202e78",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
    },
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
