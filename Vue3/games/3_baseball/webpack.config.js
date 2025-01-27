// webpack.config.js
const path = require("path");
// vue-loader에서 필요한 플러그인
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 개발용(development) 또는 배포용(production)
  mode: "development",

  // 빌드 시작점(entry)
  entry: {
    app: path.resolve(__dirname, "src", "main.js"),
  },

  // .vue 파일 처리를 위한 로더 설정
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 추가: .css 파일 처리
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // JS 트랜스파일링이 필요하다면 babel-loader를 추가할 수 있습니다.
      /*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
      */
    ],
  },

  // vue-loader 동작을 위해 반드시 필요한 플러그인
  plugins: [new VueLoaderPlugin()],

  // 빌드 결과물 설정
  output: {
    // [name]은 entry의 key값(app)을 사용하여 app.js로 출력
    filename: "[name].js",
    // 빌드 파일이 저장될 경로
    path: path.resolve(__dirname, "dist"),
  },
};
