module.exports = (webpackConfig, { env, paths }) => {
  console.log({ env, PLATFORM: process.env.PLATFORM, paths });
  // console.log(webpackConfig);
  // eslint-disable-next-line no-param-reassign
  // webpackConfig.resolve.fallback = {
  //   fs: false,
  // };
  return webpackConfig;
};
