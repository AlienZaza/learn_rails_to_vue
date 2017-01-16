//= require vue
//= require vue-router
//= require vue-resource

//= require routes



const VERSION = '0.1.0.dev';

// Initial project
app = new Vue({
    router: router,
    data: {
        // 已异步加载过的CSS
        loadedCSS: [],
        router: router
    },
    methods: {
        workspace: function() {
            return this.$refs.workspace;
        },
        // 异步加载CSS
        loadStyle: function(url) {
            // 检测是否已加载过
            if($.inArray(url + '?version=' + VERSION, this.loadedCSS) == -1) {
                $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', url));
                this.loadedCSS.push(url);
            }
        },
        // 异步加载JavaScript
        loadScript: function(url) {
            $.getScript(url + '?version=' + VERSION).fail(function(jqxhr, settings, exception) {
                // 打印异步加载JS的异常信息用于帮助调试
                console.log(exception);
            });
        }
    },
    components: {
    }
}).$mount('#root');
