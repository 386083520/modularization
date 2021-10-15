(function (window, $) {
    let gsd1 = 'gsd666'
    function gsd11() {
        console.log('gsd11:' + gsd1)
        $('body').css('background', 'red')
    }
    function gsd12() {
        console.log('gsd12:' + gsd1)
    }
    window.module1 = { gsd11 }
})(window, jQuery)
