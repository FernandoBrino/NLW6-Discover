const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()
        // o 'await' faz com que a a proxima linha de código só seja rodada
        // após a finalização e a respost da função que o contém (neste caso o 'Database()')
        // o 'async' precisa estar na função que o 'await' está dentro (no caso 'init()')

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions ( 
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()

    }
}

initDb.init();

