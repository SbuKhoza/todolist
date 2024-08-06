import initSqlJs from 'sql.js';

let db;

const initializeDatabase = async () => {
  const SQL = await initSqlJs();
  db = new SQL.Database();
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    text TEXT,
    date TEXT,
    time TEXT,
    priority TEXT,
    completed INTEGER
  )`);
};

const addUser = (username, email, password) => {
  const stmt = db.prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
  stmt.run([username, email, password]);
  stmt.free();
};

const getUser = (username, password) => {
  const stmt = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  stmt.bind([username, password]);
  const result = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return result;
};

const addTask = (username, text, date, time, priority, completed) => {
  const stmt = db.prepare("INSERT INTO tasks (username, text, date, time, priority, completed) VALUES (?, ?, ?, ?, ?, ?)");
  stmt.run([username, text, date, time, priority, completed ? 1 : 0]);
  stmt.free();
};

const getTasks = (username) => {
  const stmt = db.prepare("SELECT * FROM tasks WHERE username = ?");
  stmt.bind([username]);
  const tasks = [];
  while (stmt.step()) {
    tasks.push(stmt.getAsObject());
  }
  stmt.free();
  return tasks;
};

export { initializeDatabase, addUser, getUser, addTask, getTasks };
