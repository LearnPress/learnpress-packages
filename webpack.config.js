const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CustomTemplatedPathPlugin = require('@wordpress/custom-templated-path-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const LearnPressCustomTemplatedPathPlugin = require('@learnpress/custom-templated-path-webpack-plugin');
const LearnPressDependencyExtractionWebpackPlugin = require('@learnpress/dependency-extraction-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const {get, escapeRegExp, compact} = require('lodash');
const {basename, sep} = require('path');
const args = require('yargs').argv;

//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseDir = path.join(__dirname, '../../');
const buildPath = __dirname + '/build';

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
const packageDir = __dirname + '/src/';
const packages = {
    'course-learner': `file:${packageDir}packages/course-learner`,
    'course-curriculum': `file:${packageDir}packages/course-curriculum`,
    'course-progress': `file:${packageDir}packages/course-progress`,
    'course-overview': `file:${packageDir}packages/course-overview`,
    'blocks': `file:${packageDir}packages/blocks`,
    'components': `file:${packageDir}packages/components`,
    'utils': `file:${packageDir}packages/utils`,
};

const editorPackages = Object.keys(packages);
const {
    NODE_ENV: mode = 'development',
    WP_DEVTOOL: devtool = ( mode === 'production' ? false : 'source-map' ),
} = process.env;
const isDev = mode !== 'production';
const isWatch = !!args.watch;

module.exports = function (env = {environment: "production", watch: false, buildTarget: false}) {
    const config = {
        mode,
        entry: editorPackages.reduce((memo, packageName) => {
            const name = camelCaseDash(packageName);
            memo[name] = `${packageDir}packages/${ packageName }`;
            return memo;
        }, {}),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[basename]/index' + (isDev ? '' : '.min') + '.js',
            library: ['LP', '[name]'],
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

            new CopyPlugin(editorPackages.map((name)=>{
                return {
                    from: packageDir+`/packages/${name}/package.json`,
                    to: path.resolve(__dirname, 'build')+`/${name}/`
                }
            }).concat(editorPackages.map((name)=>{
                return {
                    from: path.resolve(__dirname, 'build')+`/${name}/index.js.map`,
                    to: packageDir+`/assets/js/${name}.js.map`
                }
            }))),

            new MergeIntoSingleFilePlugin({
                files: editorPackages.reduce((memo, packageName) => {
                    const name = `../src/assets/js/${ packageName }.js`;
                    memo[name] = [__dirname+`/build/${packageName}/index.js`];
                    return memo;
                }, {}),
                transform: editorPackages.reduce((memo, packageName) => {
                    const name = `../src/assets/js/${ packageName }.js`;
                    memo[name] = function(code){
                        return code.replace(/index.js.map/, `${packageName}.js.map`);
                    }
                    return memo;
                }, {})
            })
            //blocksCSSPlugin,
        ],
        devtool
        //...buildConfig(env)
    }

    return config;
}