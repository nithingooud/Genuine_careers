const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    // ...
    './src/components/**/*.{html,js}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ]
}
