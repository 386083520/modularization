(function () {
    require.config({
        paths: {
            module1: './modules/module1',
            module2: './modules/module2'
        }
    })
    require(['module1'], function (module1) {
        module1.gsd11()
    })
})()
