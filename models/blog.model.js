const db = require('../utils/database.js');

class Blog {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }


    save() {
        return db.execute('INSERT INTO Blog(title, content) VALUES (?, ?)', [this.title, this.content]);
    }

    static deleteById(id){
        return db.execute('DELETE FROM Blog WHERE id=?', [id])
    }

    static getAll() {
        return db.execute('SELECT * FROM Blog');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM Blog WHERE id = ?', [id]);
    }

}

module.exports = Blog;
