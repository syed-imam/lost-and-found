module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      About: 'app/components/About.jsx',
      LostAndFoundAPI: 'app/api/LostAndFoundAPI.jsx',
      ShowImageModal: 'app/components/ShowImageModal.jsx',
      Footer: 'app/components/Footer.jsx',
      LostList: 'app/components/LostList.jsx',
      LostItem: 'app/components/LostItem.jsx',
        LostItem1: 'app/components/LostItem1.jsx',
      LoadingComponent: 'app/components/LoadingComponent.jsx',
      LostProductsTable: 'app/components/LostProductsTable.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','es2016']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
