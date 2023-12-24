import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec("CREATE TABLE IF NOT EXISTS messages(name TEXT, message TEXT)");

let msg = db.prepare("INSERT INTO messages VALUES(?, ?)");
msg.run("sam", "Hello");
msg.run("Charlie", "How are u?");
msg.run("sam", "bad :(");
