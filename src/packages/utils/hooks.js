const {hooks} = wp;
const {toArray, sum} = lodash;

const fn = [
    'addFilter',
    'applyFilters',
    'hasFilter',
    'didFilter',
    'addAction',
    'doAction',
    'hasAction',
    'didAction',
    'removeAction',
    'currentAction'
];

const obj = {};

const hookCounter = {}

fn.map((f) => {
    obj[f] = function () {
        let args = toArray(arguments), priority = args[2] || 10, priorities;

        if (['addAction', 'addFilter', 'removeAction', 'removeFilter'].indexOf(f) !== -1) {
            args.splice(1, 0, 'LP');
        } else if (['applyFilters', 'doAction'].indexOf(f) !== -1) {
            args.splice(1, 0);
        }

        if (f !== 'doAction') {
            if (!hookCounter[args[0]]) {
                hookCounter[args[0]] = {}
            }

            if (!hookCounter[args[0]][priority]) {
                hookCounter[args[0]][priority] = 1;
            } else {
                hookCounter[args[0]][priority]++;
            }

            args[0] += priority + '-' + hookCounter[args[0]][priority];
        }

        switch (f) {
            case 'doAction':
                let ret = [], x = args[0];

                if (hookCounter[x]) {
                    priorities = Object.keys(hookCounter[x]).sort().map((n) => {
                        let i = 1, m = hookCounter[x][n];
                        while (i <= m) {
                            args[0] = x + n + '-' + i;
                            ret.push(hooks.applyFilters.apply(hooks, args));
                            i++;
                        }

                        return n
                    });
                }

                return ret;
            case 'addAction':
                return hooks.addFilter.apply(hooks, args)
        }

        return hooks[f].apply(hooks, args);
    }
})
;

hooks.addAction('hookAdded', 'asd', function (hookName, namespace, callback, priority) {
    //console.log(arguments)
});

export default obj;