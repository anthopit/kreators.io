import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        kreatorsRed: {
            50: '#fff1f1',
            100: '#ffe2e1',
            200: '#ffc9c8',
            300: '#ffa3a1',
            400: '#fe6e6b',
            500: '#f7403c',
            600: '#e52622',
            700: '#c01915',
            800: '#9f1815',
            900: '#841a18',
            950: '#480807',
        },
        kreatorDark: {
            50: '#f7f7f6',
            100: '#e4e4e3',
            200: '#c9c9c6',
            300: '#a7a6a1',
            400: '#84837d',
            500: '#696963',
            600: '#53534e',
            700: '#454440',
            800: '#393936',
            900: '#32322f',
            950: '#1e1e1c',
        },

      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
