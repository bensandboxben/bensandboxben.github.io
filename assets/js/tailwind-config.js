tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#336699",
        "primary-dark": "#172B4D",
        "navy": "#172B4D",
        "slate-grey": "#526174",
        "border-light": "#DCE3EA",
        "bg-white": "#FFFFFF",
        "bg-light": "#F5F7FA",
        "bg-pale": "#EDF3F8",
        "surface": "#FFFFFF",
        "surface-container": "#F5F7FA",
        "surface-pale": "#EDF3F8",
        "text-primary": "#172B4D",
        "text-secondary": "#526174",
        "accent": "#336699"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.375rem",
        "xl": "0.5rem",
        "2xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "space-xl": "3rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
        "margin-mobile": "1.5rem",
        "space-md": "1rem",
        "gutter-mobile": "1rem",
        "margin": "4rem",
        "gutter": "2rem",
        "space-lg": "1.75rem"
      },
      fontFamily: {
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-caps": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Newsreader", "serif"],
        "headline-md": ["Newsreader", "serif"],
        "headline-lg": ["Newsreader", "serif"],
        "title-lg": ["Plus Jakarta Sans", "sans-serif"],
        "title-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Newsreader", "serif"],
        "display-hero": ["Newsreader", "serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"],
        "display-hero-mobile": ["Newsreader", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.06em", "fontWeight": "600"}],
        "label-caps": ["11px", {"lineHeight": "14px", "letterSpacing": "0.12em", "fontWeight": "700"}],
        "headline-sm": ["22px", {"lineHeight": "28px", "fontWeight": "500"}],
        "headline-md": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "500"}],
        "headline-lg": ["38px", {"lineHeight": "46px", "letterSpacing": "-0.02em", "fontWeight": "400"}],
        "title-lg": ["20px", {"lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "title-md": ["17px", {"lineHeight": "24px", "fontWeight": "600"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "400"}],
        "display-hero": ["52px", {"lineHeight": "60px", "letterSpacing": "-0.02em", "fontWeight": "400"}],
        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "body-sm": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
        "display-hero-mobile": ["34px", {"lineHeight": "42px", "letterSpacing": "-0.01em", "fontWeight": "400"}],
        "body-md": ["15px", {"lineHeight": "24px", "fontWeight": "400"}]
      }
    }
  }
};
