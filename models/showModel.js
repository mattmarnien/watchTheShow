const orm = require('../config/orm.js')


const show = {
    all: function(cb) {
        orm.all("shows", (data) => {
            cb(data);
        })
    },
    update: function(id,cb){
        orm.update("shows", "watched", 1, "id", id, (data) => {
            cb(data);
        })
    },
    create: function(value, cb){
        orm.create("shows", "name", value, (data) => {
            cb(data);
        })
    }
}

module.exports = show;