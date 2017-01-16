ConsoleHomeComponent = Vue.component('console-home-component', function (resolve, reject) {
    $.get('/templates/console/home.html', function(resp){
        resolve({
            data: function() {
                return { now: '' }
            },
            mounted: function() {
                app.loadScript('/templates/console/home.js');
                app.loadStyle('/templates/console/home.css');
            },
            template: resp
        });
    });
});