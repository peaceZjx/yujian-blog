// const withLess = require('@zeit/next-less');
// const lessToJS = require('less-vars-to-js');
// const fs = require('fs');
// const path = require('path');

// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'),
// );

// module.exports = withLess({
//   cssModules: true, // 开启css modules
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables, // make your antd custom effective
//   },
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       const antStyles = /antd\/.*?\/style.*?/;
//       const origExternals = [...config.externals];
//       config.externals = [
//         (context, request, callback) => {
//           if (request.match(antStyles)) return callback();
//           if (typeof origExternals[0] === 'function') {
//             origExternals[0](context, request, callback);
//           } else {
//             callback();
//           }
//         },
//         ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//       ];

//       config.module.rules.unshift({
//         test: antStyles,
//         use: 'null-loader',
//       });
//     }
//     return config;
//   },
// });

const withLessExcludeAntd = require('./next-less.config.js');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// choose your own modifyVars
// const modifyVars = require('./utils/modifyVars');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'),
);

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

module.exports = withLessExcludeAntd({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
});
