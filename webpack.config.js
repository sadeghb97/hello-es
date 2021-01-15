module.exports = {
  context: __dirname + "/src", // -> code haye proje inja gharar migirad
  entry: "./try26-webpack-entry.js", // -> noghte shorue code haye js -> nesbat be adrese bala
  output: {
    path: __dirname + "/build", // -> mahali ke file nahaei va bundle shode gharar migirad
    filename: "bundle.js" // -> name file nahaei ke mitavanim dar file html import konim
  },
  module: {

  }
}