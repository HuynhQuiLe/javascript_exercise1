tailwind.config = {
  theme: {
    extend: {
      colors: {
        custom_black: "#495057",
        custom_blue: "#3F80EA",
        custom_light_blue: "#78a6f0",
        custom_gray: "#6c757d",
        bg_black: "#293042",
        bg_gray: "#f7f9fc",
        custom_btn: "#2bc48a",
      },
      boxShadow: {
        custom_shadow: "0 0 2rem #2930421a;",
      },
      spacing: {
        custom_100vh: "calc(100vh - 70px)",
      },
      minHeight: {
        custom_100vh: "calc(100vh - 70px)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
};
