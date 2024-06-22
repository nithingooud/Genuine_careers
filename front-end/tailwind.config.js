const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ]
}
