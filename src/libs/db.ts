import Database from "better-sqlite3"

const db = new Database("data.db", { verbose: console.log })

export default db