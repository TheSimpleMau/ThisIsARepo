const db = require('../utils/database');
const bcrypt = require('bcryptjs');

class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12).then((cypherPassword) => {
            return db.execute(
                'INSERT INTO Users(username, password) VALUES (?, ?)', 
                [this.username, cypherPassword]
                );
        }).catch((error) => {
            console.log(error);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM Users WHERE username = ?', [username]);
    }

    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        } else {
            return this.fetchAll();
        }
    }

}

module.exports = User;