var webpack = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    entry: [
        //assets
        '/assets/scss/index-vendor.scss',
        //node_modules
        'bootstrap',
        'jquery'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
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
        ]
    },
    output: {
        filename: 'vendor.bundle.js',
        path: path.join(__dirname, './build'),
        library: 'vendor_lib'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_lib',
            path: path.join(__dirname, './build', 'vendor-manifest.json')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery' : 'jquery'
        }),
        new MiniCssExtractPlugin({ filename: 'vendor.bundle.css' })
    ]
}
