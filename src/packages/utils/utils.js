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