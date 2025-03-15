const db = require('../utils/database.js');

class Blog {
    constructor(title, content) {
        this.is = NaN // nan hasta que se cree en la base de datos
        this.title = title;
        this.content = content;
        // this.date = new Date().toISOString();
    }


    save() {
        // Blog.posts.push(this);
        return db.execute('INSERT INTO Blog(title, content) VALUES (?, ?)', [this.title, this.content]);
    }

    static getAll() {
        return db.execute('SELECT * FROM Blog');
    }

    static getNewID(id) {
        return db.execute('SELECT')
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM plantas WHERE id = ?', [id]);
    }

}

Blog.posts = [];

module.exports = Blog;
