module.exports = {
  presets: ['@cody-mn/babel-preset-react-app'],
  plugins: [
    [
      'styled-components',
      {
        displayName: false,
        fileName: false,
        pure: true,
        transpileTemplateLiterals: true,
        ssr: false,
      },
    ],
  ],
  env: {
    development: {
      plugins: [
        'react-refresh/babel',
        // , 'react-dev-inspector/plugins/babel'
      ],
    },
  },
};
