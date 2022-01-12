//import db.js module
var db = require('./db');

class Blog {
    //fetch all blogs
    static all(callback)
    {  db.all("select * from blog", [], (err, rows) => {
        if (err)
            return console.error(err.message);
        callback(rows);
    });
    }
 
 
    //select a specific blog according to a specific search term
    static find(searchTerm, callback)
    {   db.get('select * from blog where searchTerm = ? ', searchTerm, (err, rows) => {
        if (err)
            return console.error(err.message);
        callback(rows);
    });
    }
    static findbyId(id, callback)
    {
         return db.get('select * from blog where blogid = ?' ,id, (err, rows) => {
            if (err)
                return console.error(err.message);
            callback(rows);
        });
    }

    //populate blog data into table
    static create(data, callback)
    {   let sql = "insert into blog(creator, createDate, title, searchTerm, content) values (?, ?, ?, ?, ?)";
        var values = [data.creator, data.createDate, data.title,data.searchTerm,data.content];
        db.run(sql, values, callback);
    }

    //To remove a blog
    static delete(title, callback)
    {  if (!title)
        return callback(new Error('Please provide a title'));
       db.run('delete from blog where blogid = ?', title, callback);
    }
}

module.exports = db;
module.exports.Blog = Blog;