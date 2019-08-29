export const apiFetch = (options)=>{
    let $ = window.jQuery;

    options = $.extend({
        url: ''
    }, options || {});
    $.ajax()
}