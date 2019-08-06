#!/usr/bin/env bash
src=$PWD/build
dest=~/Documents/htdocs/learnpress/dev/wp-content/plugins/learnpress-course-learner/assets
packages="course-curriculum course-learner course-progress components"

for package in ${packages}; do
    rm ${dest}/js/${package}.js
    ln -s ${src}/${package}/index.js ${dest}/js/${package}.js
done

dest=$PWD/node_modules/@learnpress
#packages="course-curriculum course-learner"

for package in ${packages}; do
    rm ${dest}/${package}
    ln -s ${src}/${package} ${dest}/
done

src=$PWD/src/packages
dest=$PWD/node_modules/@learnpress
packages="custom-templated-path-webpack-plugin dependency-extraction-webpack-plugin"
for package in ${packages}; do
    rm ${dest}/${package}/
    ln -s ${src}/${package} ${dest}/
done