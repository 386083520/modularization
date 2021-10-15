import module2 from "./module2";
export default {
    gsd1: 'gsd6667',
    gsd11: function () {
        console.log('gsd11:' + this.gsd1)
        module2.gsd21()
    }
}
