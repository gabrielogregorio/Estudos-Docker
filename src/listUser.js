const connection = require("./db.config");

function listUsers() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT name FROM users", (error, results) => {
      if (error) {
        return reject(error);
      }
      const userList = results.map((row) => row.name);
      
      resolve(userList);
    })
  });
}

module.exports = listUsers;
