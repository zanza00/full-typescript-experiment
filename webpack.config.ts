{
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.join('.cache', 'cache-loader')
        }
      },
      {
        loader: 'babel-loader',
        options: {babelrc: true}
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          configFile: path.resolve('.', 'tsconfig.build.json')
        }
      }
    ]
  }