var pc = pc || {};

(function (app) {
    app.classes = {
        current: 'current',
        hidden: 'is-hidden',
        transition: 'has-transition'
    };

    app.namespace = 'pc';

    app.events = {
        click: 'click.' + app.namespace
    };

    app.$objs = {};
    app.modules = [];

    app.windowSize = function () {
        return $(window).width();
    };

    app.registerInit = function (module) {
        app.modules.push(module);
    };

    app.plugged = [
        {func: 'collapsible', target: '.collapsible', params: {closeSiblings: true}},
        {func: 'tabview', target: '.tab-view'}
    ];

    app.initModules = function () {
        if (app.modules.length > 0) {
            app.modules.forEach(function (module) {
                if (typeof app[module] !== 'undefined' && !app[module].isInitialized()) {
                    app[module].init();
                }
            });
        }
    };

    app.bindPlugins = function () {
        $(app.plugged).each(function () {
            var e = this,
                p;

            if (typeof $.fn[e.func] !== 'function') {
                return;
            }

            if (typeof e.params !== 'undefined') {
                p = e.params;
            }

            $(e.target)[e.func](p);
        });
    };


    app.init = function () {
        app.$objs.document = $(document);
        app.$objs.body = $('body');

        app.initModules();
        app.bindPlugins();

    };

    app.initModules = function () {
        if (app.modules.length > 0) {
            app.modules.forEach(function (module) {
                if (typeof app[module] !== 'undefined' && !app[module].isInitialized()) {
                    app[module].init();
                }
            });
        }
    };

})(pc);

$(function () {
    pc.init();
});

//# sourceMappingURL=fast-login.js.map
