const path = require('path');
const webpack = require('webpack');
const CustomTemplatedPathPlugin = require('@wordpress/custom-templated-path-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const LearnPressCustomTemplatedPathPlugin = require('@learnpress/custom-templated-path-webpack-plugin');
const LearnPressDependencyExtractionWebpackPlugin = require('@learnpress/dependency-extraction-webpack-plugin');
const glob = require('glob');

const {get, escapeRegExp, compact} = require('lodash');
const {basename, sep} = require('path');
const args = require('yargs').argv;

//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseDir = path.resolve(__dirname+'/../');
const buildPath = baseDir + '/build';

// Set different CSS extraction for editor only and common block styles
// const blocksCSSPlugin = new ExtractTextPlugin({
//     filename: './assets/css/main.css',
// });

// Configuration for the ExtractTextPlugin.
// const extractConfig = {
//     use: [
//         {loader: 'raw-loader'},
//         {
//             loader: 'postcss-loader',
//             options: {
//                 plugins: [require('autoprefixer')],
//             },
//         },
//         {
//             loader: 'sass-loader',
//             query: {
//                 outputStyle: 'production' === process.env.NODE_ENV ? 'compressed' : 'nested'
//             },
//         },
//     ],
// };

//const buildConfig = require('./tools/build');
const {camelCaseDash} = require('@wordpress/scripts/utils');
const packageDir = baseDir + '/src/';
const packages = {
    'course-learner': `file:${packageDir}packages/course-learner`,
    'course-curriculum': `file:${packageDir}packages/course-curriculum`,
    'course-progress': `file:${packageDir}packages/course-progress`,
    'components': `file:${packageDir}packages/components`,
};

const editorPackages = Object.keys(packages);
const {
    NODE_ENV: mode = 'development',
    WP_DEVTOOL: devtool = ( mode === 'production' ? false : 'source-map' ),
} = process.env;
const isDev = mode !== 'production';
const isWatch = !!args.watch;

const toObject = function toObject(paths) {
    var ret = {};

    paths.forEach(function(p) {
        const name = p.replace(path.resolve(packageDir, 'templates'), '')
        ret[name] = p;
    });

    return ret;
}

module.exports = function (env = {environment: "production", watch: false, buildTarget: false}) {
	const entries = toObject(glob.sync(packageDir + 'templates/index.js', {"ignore":['**/build/**/*']}));
	var rimraf = require("rimraf");
	rimraf.sync(packageDir + 'templates/build');
	console.log(packageDir+'templates/index.js')
    const config = {
        mode,
        entry: toObject([packageDir+'templates/index.js']),
        output: {
            path: path.resolve(packageDir, 'templates/build'),
            filename: '[basename]' + (isDev ? '' : '.min'),
            library: ['LP', 'Templates'],
            libraryTarget: 'this',
        },
        watch: isWatch,//'production' !== process.env.NODE_ENV,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            //presets: ['babel-preset-env']
                            presets: ['@babel/preset-env']
                        }
                    },
                },
                // {
                //     test: /([a-zA-Z0-9\s_\\.\-\(\):])+(.s?css)$/,
                //     use: blocksCSSPlugin.extract(extractConfig),
                // },
            ],
        },
        plugins: [
            new CustomTemplatedPathPlugin({
                basename(p, data) {
                    let rawRequest;

                    const entryModule = get(data, ['chunk', 'entryModule'], {});
                    switch (entryModule.type) {
                        case 'javascript/auto':
                            rawRequest = entryModule.rawRequest;
                            break;

                        case 'javascript/esm':
                            rawRequest = entryModule.rootModule.rawRequest;
                            break;
                    }
					
					console.log('XXX', rawRequest, p)

                    if (rawRequest) {
                        return basename(rawRequest);
						
						//return rawRequest.replace(path.resolve(packageDir, 'templates'), '').replace(/.js$/,'')
                    }

                    return p;
                },
            }),
            new DependencyExtractionWebpackPlugin(),
            new LearnPressCustomTemplatedPathPlugin({
                basename(path, data) {
                    let rawRequest;

                    const entryModule = get(data, ['chunk', 'entryModule'], {});
                    switch (entryModule.type) {
                        case 'javascript/auto':
                            rawRequest = entryModule.rawRequest;
                            break;

                        case 'javascript/esm':
                            rawRequest = entryModule.rootModule.rawRequest;
                            break;
                    }

                    if (rawRequest) {
                        return basename(rawRequest);
                    }

                    return path;
                },
            }),

            new LearnPressDependencyExtractionWebpackPlugin({
                namespace: '@learnpress',
                library: 'LP'
            }),

            //blocksCSSPlugin,
        ],
        devtool
        //...buildConfig(env)
    }

    return config;
}