const {isArray, dropRight} = lodash;

export function prettyJSON(json, pre = '') {
    if (json === undefined) {
        json = {undefined: true}
    }

    if (typeof json !== 'string') {
        try {
            json = JSON.stringify(json, undefined, 4);
        } catch (e) {
            json = "";
        }
    }

    if (!document.getElementById('pretty-json-css')) {
        var style = document.createElement('style');
        style.setAttribute('id', 'pretty-json-css');
        style.innerHTML = '' +
            '.pretty-json { font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif }' +
            'pre.pretty-json {outline: 1px solid #ccc; padding: 5px; margin: 5px; }' +
            '.string { color: green; }' +
            '.number { color: darkorange; }' +
            '.boolean { color: blue; }' +
            '.null { color: magenta; }' +
            '.key { color: #4e4d4d; font-weight: bold;}';

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });

    return pre ? '<pre class="pretty-json">' + json + '</pre>' : '<div class="pretty-json">' + json + '</div>';
}

export function uniqueId(prefix, more_entropy) {
    if (typeof prefix === 'undefined') {
        prefix = '';
    }

    var retId;
    var formatSeed = function formatSeed(seed, reqWidth) {
        seed = parseInt(seed, 10).toString(16); // to hex str
        if (reqWidth < seed.length) {
            // so long we split
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) {
            // so short we pad
            return new Array(1 + (reqWidth - seed.length)).join('0') + seed;
        }
        return seed;
    };

    // BEGIN REDUNDANT
    if (!this.php_js) {
        this.php_js = {};
    }
    // END REDUNDANT
    if (!this.php_js.uniqidSeed) {
        // init seed with big random int
        this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    this.php_js.uniqidSeed++;

    retId = prefix; // start with prefix, add current milliseconds hex string
    retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
    retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
    if (more_entropy) {
        // for more entropy we add a float lower to 10
        retId += (Math.random() * 10).toFixed(8).toString();
    }

    return retId;
}

export function boundMethods(ref) {
    if (arguments.length < 2) {
        return;
    }

    for (var i = 1, n = arguments.length; i < n; i++) {
        if (isArray(arguments[i])) {
            arguments[i].map((method) => {
                ref[method] = ref[method].bind(ref);
            });
        } else {
            ref[arguments[i]] = ref[arguments[i]].bind(ref);
        }
    }
}

export function trailingSlashIt(url, add = true) {
    return url.match(/.*\/$/)
        ? (add ? url : dropRight(url, 1).join(''))
        : (add ? `${url}/` : url);
}

export function setUrl(url, ember, title) {
    if (url) {
        history.pushState({}, title, url);
    }
}