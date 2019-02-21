
(function() {
    'use-strict';

    var config = {};

    config.paths = {
        app:     'app',
        fonts:   'app/assets/fonts/',
        images:  'app/assets/images/',
        scripts: 'app/assets/scripts/',
        styles:  'app/assets/styles/',
        js:      'rocket-engine/scripts/',
        scss:    'rocket-engine/styles/',
        tpl:     'rocket-engine/templates/',
        svg:     'rocket-engine/svg/',
        data:    'rocket-engine/data/',
        html:    'app',
        sprite:  'app/assets/images/sprite/',
        spriteImg: 'rocket-engine/sprite/'
    };

    config.banner = [
        '/*! <%= pkg.name %> \n' +
        ' *  <%= pkg.description %> \n' +
        ' *  @author <%= pkg.author %> \n' +
        '<% if (typeof pkg.contributors !== "undefined") { %>' +
        '<% pkg.contributors.forEach(function(contributor) { %>' +
        ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
        '<% }) %>' +
        '<% } %>' +
        ' *  @version <%= pkg.version %> \n' +
        ' *  @build <%= date %> \n' +
        ' */\n'
    ].join('');

    config.libscripts = [
        'bower_components/jquery/dist/jquery.js',
    ];

    config.scripts = [
        config.paths.js + '**/*.js'
    ];

    config.server = {
        livereload: true,
        port:       3000,
        debug:      false,
        routes:     [
            '^(\/[^\.]+)$ http://localhost:3000$1.html [P NC L]'
        ]
    };

    module.exports = config;
})();