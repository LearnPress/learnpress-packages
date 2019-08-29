/**
 * Test js hooks
 */
jQuery(function () {

    var hooks = LP.utils.hooks;

    // hooks.addAction('course-item-extra', function (item) {
    //
    //     if (item.type !== 'lp_quiz') {
    //         return;
    //     }
    //
    //     return React.createElement('div', {
    //         dangerouslySetInnerHTML: {
    //             __html: 'Quiz Questions:' + JSON.stringify(item.questions)
    //         }
    //     })
    // })

    return;
    hooks.addAction('before-course-landing', function () {
        return React.createElement('div', {
            dangerouslySetInnerHTML: {
                __html: 'Hello, <strong>Admin</strong>'
            }
        })
    }, -40)

    hooks.addAction('before-course-landing', function () {
        return React.createElement('div', {
            dangerouslySetInnerHTML: {
                __html: 'You are student'
            }
        })
    }, 10)

    hooks.addAction('before-course-landing', function () {
        return React.createElement('div', {
            dangerouslySetInnerHTML: {
                __html: '#1111'
            }
        })
    }, 1)

    hooks.addAction('before-course-landing', function () {
        return React.createElement('div', {
            dangerouslySetInnerHTML: {
                __html: 'YEP!'
            }
        })
    }, 10)

    hooks.addAction('after-course-landing', function () {
        return React.createElement('div', {
            dangerouslySetInnerHTML: {
                __html: 'Continue...'
            }
        })
    })

});