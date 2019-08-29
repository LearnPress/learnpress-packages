const path = require('path');
const glob = require('glob');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const packageDir = path.resolve(__dirname + '/../src/');
const getPackageName = function getPackageName(p) {
    p = p.replace('.js', '');
    p = p.split('-').map((w) => {
        return w.charAt(0).toUpperCase() + w.substr(1);
    });
    p = p.join("").split('/').map((w) => {
        return w.charAt(0).toUpperCase() + w.substr(1);
    });

    return p.join("_")
}

const getEntries = function getEntries(entries) {
    return entries.reduce((memo, entry) => {
        const name = entry.replace(packageDir + '/templates', '');

        memo[name] = entry.replace(path.dirname(packageDir), '.')
        return memo;
    }, {});
}

const xyz= function(){
    const entries = glob.sync('/Users/tu/Documents/dev/WordPress/gutenberg/build/**/index.js')



    console.log(entries.map((a)=>{
        return a.replace('/Users/tu/Documents/dev/WordPress/gutenberg/build/', '').replace('/index.js', '')
    }).join(' '))
}
module.exports = function () {
    const entries = (glob.sync(packageDir + '/templates/**/*.js', {"ignore": ['**/build/**/*']})).filter((t) => {
        return !(t.match(/templates\/index.js/) || t.match(/templates\/hooks.js/));
    });

    console.log(entries)

    return {
        entry: getEntries(entries),
        output: {
            filename: '[name]',
            path: packageDir + '/templates/build/',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                },
            ],
        },
        plugins: [
            new MergeIntoSingleFilePlugin({
                files: {
                    "../index.js": entries
                },
                transform: {
                    '../index.js': code => {
                        return entries.map((entry) => {

                                entry = entry.replace(packageDir + '/templates/', '');
                                const packageName = getPackageName(entry)

                                return 'export {default as ' + packageName + '} from "./' + entry + '"';
                            }).join("\n") + "\n// For watching files change\n" + '// export const rand = function(){ return \'' + new Date() + '\'}'
                    }
                }
            })
        ]
    };
}