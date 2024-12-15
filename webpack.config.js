const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const glob = require('glob');

module.exports = (env, argv) => {

    const isDev = argv && (argv.mode === 'development');
    console.info(`[DEBUG] Webpack běží v ${isDev ? 'DEVELOPMENT' : 'PRODUCTION'} módu`);

    let config = {
        mode: argv ? argv.mode : null,
        devtool: 'eval',
        cache: {
            type: 'filesystem',
            cacheLocation: path.resolve(__dirname, '.test_cache'),
        },
        entry: [
            './assets/app.js',

        ],
        output: {
            path: path.join(__dirname, 'build'),
            filename: '[name].bundle.js',
        },
        performance: {
            hints: false
        },
        module: {
            rules: [
                {
                    test: /\.(css|less|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: true
                            },
                        },
                        // {
                        //     loader: "postcss-loader"
                        // },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                // debug: true,
                                root: __dirname
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    // outputStyle: 'compressed'
                                },
                                sourceMap: true
                            },
                        },
                    ],
                },
                {
                    test:  /(\.(png|jpe?g|gif)$|im[a]?g.*\.svg$)/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[hash][ext][query]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$|fonts.*\.svg$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[hash][ext][query]'
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: path.join(__dirname, './build', 'vendor-manifest.json')
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery' : 'jquery'
            }),
            new BrowserSyncPlugin({
                proxy: {
                    target: 'http://localhost:63342/webpack-bundle/index.html',
                    proxyOptions: { changeOrigin: true } //true (na lokalu bez dockeru) | false
                },
                open: false
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './assets/favicon', to: 'favicon', noErrorOnMissing: true },
                    { from: './assets/img/other-images', to: 'other-images', noErrorOnMissing: true },
                ]
            }),
            new MiniCssExtractPlugin({ filename: '[name].bundle.css' })
        ]
    };

    return config;
};
