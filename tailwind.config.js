/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        antiquewhite: "#e9e4cb",
        whitesmoke: "#efefef",
        gray: {
          "100": "#8d8484",
          "200": "#0b132a",
          "300": "rgba(13, 16, 37, 0.06)",
        },
        white: "#fff",
        mediumseagreen: {
          "100": "#2ac96f",
          "200": "#12b057",
          "300": "rgba(42, 201, 111, 0.35)",
        },
        silver: "#c8c8c8",
        dimgray: "#4f5665",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dde0e4",
        },
        tomato: {
          "100": "#ff5252",
          "200": "#f53838",
          "300": "rgba(245, 56, 56, 0.35)",
        },
        crimson: {
          "100": "#ff526e",
          "200": "#f53855",
          "300": "rgba(255, 82, 110, 0.09)",
        },
        red: {
          "100": "#ff2626",
          "200": "#ff0000",
        },
        lavenderblush: "#ffecec",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
      },
      borderRadius: {
        "sm-3": "13.3px",
        "74xl-3": "93.3px",
        "47xl-7": "66.7px",
        "base-1": "16.1px",
      },
    },
    fontSize: {
      "8xl-8": "27.8px",
      "3xl": "22px",
      "2xl-3": "21.3px",
      "27xl-7": "46.7px",
      "9xl": "28px",
      "18xl": "37px",
      mid: "17px",
      "lg-7": "18.7px",
      "5xl": "24px",
      lgi: "19px",
      "7xl-7": "26.7px",
      "2xl": "21px",
      "14xl-3": "33.3px",
      xl: "20px",
      "8xl": "27px",
      "4xl-6": "23.6px",
      "47xl-7": "66.7px",
      "64xl-5": "83.5px",
      inherit: "inherit",
    },
    screens: {
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
