// webpack.config.js
module.exports = {
  // 기존의 설정...
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
    },
  },
};
