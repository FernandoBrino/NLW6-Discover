const slqlite3 = require("sqlite3");
const {open} = require("sqlite")
// traz apenas a função 'open' dentro do sqlite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: slqlite3.Database,
    });
