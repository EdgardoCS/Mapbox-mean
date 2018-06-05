var sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve('src/db', 'mydbUpdated.db')
var db = new sqlite3.Database(dbPath);
