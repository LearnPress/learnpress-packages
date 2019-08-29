#!/usr/bin/env bash
packages="a11y annotations api-fetch autop blob block-editor block-library block-serialization-default-parser block-serialization-spec-parser blocks components compose core-data data-controls data date deprecated dom-ready dom edit-post edit-widgets editor element escape-html format-library hooks html-entities i18n is-shallow-equal keycodes list-reusable-blocks media-utils notices nux plugins priority-queue redux-routine rich-text server-side-render shortcode token-list url viewport wordcount"
dest=~/Documents/htdocs/learnpress/dev/wp-includes/js/dist/
src=~/Documents/dev/WordPress/gutenberg/build/

for package in ${packages}; do
    ln -s ${src}/${package}/index.js ${dest}/${package}.min.js
done