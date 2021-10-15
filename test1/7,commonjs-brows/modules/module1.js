let module2 = require('./module2.js')
module.exports = {
    gsd1: 'gsd6667',
    gsd11: function () {
        console.log('gsd11:' + this.gsd1)
        module2.gsd21()
    }
}
