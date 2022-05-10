module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        '52px':'52px',
        '72px': '72px',
        '47px': '47px',
        '335px':'335px',

      },

      width: {
        '263px':'263px',
        '350px': '350px',
        '190px': '190px',
        '605px': '605px',
        '88%': '88%',
      },      
      colors: {
        /* Primary Colors */
        'brandGreen':'#00856F',
        'brandGreenLight':'#DCE9E2',
        'brandGreenLight02': '#F7F9F9',
        'brandBeige': '#FFFAF1',
        'brandGreenhover':'#00453A',

        /* Secondary Colors */
        'grayHeadline':'#061800',
        'grayParagraph':'#384633',
      },

      fontSize: {

        xs: '14px',
        smt:'16px',
        base: '18px',
        md: '24px',
        mdmobile:'30px',
        lg:'40px',
        lgmobile:'34px',
        xl:'48px',
        xxl:'52px',
      },

      fontFamily:{
        'dmsans': ["DM Sans", "sans-serif"],
      },
      letterSpacing:{
        base: '8%',
      },
      lineHeight:{
        '1': '150%',
        '2': '130%',
      },
      
    },
  },
  plugins: [],
}
