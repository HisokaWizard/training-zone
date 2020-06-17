const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'dist', 'index.html');
const PORT = process.env.PORT || 7007;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
})); // serving js files from webpack

app.use(webpackHotMiddleware(compiler)); // rebuild code after every save changes in code

app.use(express.static(path.join(DIST_DIR, 'dist')));

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});