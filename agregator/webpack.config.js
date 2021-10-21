const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const deps = require('./package.json').dependencies;

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 3000,
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'AGR',
                remotes: {
                    MFEUI: 'MFEUI@http://localhost:3010/components.js'
                },
                shared: {
                    react: {
                        requiredVersion: deps.react,
                        singleton: true,
                    },
                    'react-dom': {
                        requiredVersion: deps['react-dom'],
                        singleton: true,
                    },
                }
            }
        ),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
    ],
};