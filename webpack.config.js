const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isSolarSystem = process.env.OTHER_FLAG;
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const styleLoaders = (regexp, loader) => {
    const config = {
        test: regexp,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    };

    if (loader) {
        config.use.push(loader);
    }

    return config;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    // entry points (maybe more than one)
    entry: {
        general: isSolarSystem ? ['./app/components/universe/index.ts'] : ['./app.tsx'],
    },
    // directory and general file with application
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.ts', '.tsx', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/app/components'),
            // 3d app
            '@universe': path.resolve(__dirname, 'src/app/components/universe'),
            '@models': path.resolve(__dirname, 'src/app/components/universe/models'),
            // colonialists
            '@gameModels': path.resolve(__dirname, 'src/app/components/colonialists/models'),
            '@gameStore': path.resolve(__dirname, 'src/app/components/colonialists/store'),
        }
    },
    // optimization of the build, with vendor, where we have libraries.
    optimization: optimization(),
    devServer: {
        port: 7007,
        hot: isDev,
        historyApiFallback: true,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        // clean dist when we rebuild and we can add new files
        new CleanWebpackPlugin(),
        // copy static items to the dist, what we want
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
        }),
        // create chuck for styles in the dist
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        // update index.html after rebuild automatically
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            }
        }),
    ],
    // implement loaders for different files except of js
    module: {
        rules: [
            styleLoaders(/\.css?$/),
            styleLoaders(/\.less?$/, 'less-loader'),
            styleLoaders(/\.s[ac]ss?$/, 'sass-loader'),
            {
                test: /\.(png|jpg|svg|gif|jpeg)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.(mov|mpeg4|avi|mp4)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.xml?$/,
                use: ['xml-loader'],
            },
            {
                test: /\.csv?$/,
                use: ['csv-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
}