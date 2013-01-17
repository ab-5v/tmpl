;(function(global, undefined) {

    var PROJECTNAME = global.PROJECTNAME = {};

    require('./yate.js');

    var content = yr.run('main', {username: 'artjock'}, 'test');
    console.log(content);

    $('body').html( content );

})(this);
