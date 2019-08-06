/**
 * Transform path of template to package name
 *
 * @param p
 */
const getPackageName = function getPackageName(p) {

    if (!p.match(/\.js$/)) {
        p += '/index.js';
    }

    p = p.replace('.js', '');
    p = p.split('-').map((w) => {
        return w.charAt(0).toUpperCase() + w.substr(1);
    });
    p = p.join("").split('/').map((w) => {
        return w.charAt(0).toUpperCase() + w.substr(1);
    });

    return p.join("_")
}

export default {
    /**
     *
     * @param name
     * @param _this
     * @return {string}
     */
    get(name, _this){
        name = getPackageName(name.replace(/^\//, ''));
        let instance = LP['Templates'][name];

        if (!instance) {
            return '';
        }

        return React.createElement(instance, null);
    }
}