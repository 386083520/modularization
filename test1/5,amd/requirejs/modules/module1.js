define(['module2'], function (module2) {
    let gsd1 = 'gsd6667'
    function gsd11() {
        console.log('gsd11:' + gsd1)
        module2.gsd21()
    }
    return { gsd11 }
})
