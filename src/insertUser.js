const connection = require("./db.config");

function insertUser(name) {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (name) VALUES (?)";
    connection.query(query, [name], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = insertUser;
