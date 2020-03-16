// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    all: function(table, cb){
        connection.query("SELECT * FROM ??", [table], (err, data)=> {
            if(err) throw err;
            cb(data);
        })
    },

    update: function(table, column, changeTo,  whereColumn, whereValue, cb){
        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, column, changeTo, whereColumn, whereValue], function(err, data){
            if(err) throw err;
            cb(data);
        })
    },

    create: function(table, column, values, cb) {
        connection.query("INSERT INTO ?? (??) VALUES(?)", [table, column, values], function(err, data) {
            if(err) throw err;
            cb(data);
        })
    },
    delete: function(table, whereColumn, whereValue, cb) {
    
        connection.query("DELETE FROM ?? WHERE ?? = ?", [table, whereColumn, whereValue], function(err, data) {
          if (err) throw err;    
          cb(data);
        });
      }
}






// Export the orm object for the model (cat.js).

module.exports = orm;
