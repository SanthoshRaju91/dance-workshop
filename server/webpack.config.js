const webpack = require('webpack');
const path = require('path');
// used to whitelist webpack hot reloading and node_modules when bunlding
const nodeExternal = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/poll?1000', './app/index.js'],
    watch: true,
    devtool: 'sourcemap',
    target: 'node',
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [nodeExternal({ whitelist: ['webpack/hot/poll?1000'] })],
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [['env', { module: false}], 'stage-0'],
                            plugins: ['transform-regenerator', 'transform-runtime']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(graphql|gql)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'raw-loader'
                }
            }
        ]
    },
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 
                BUILD_TARGET: JSON.stringify('server'), 
                NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`) 
            }
        }),
        new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js'
    }
}