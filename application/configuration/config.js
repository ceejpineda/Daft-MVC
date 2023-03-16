const config = {

    port: 42069,

    database:{
        host: 'localhost',
        user: 'root',
        password: 'zqaxsw123',
        database: 'users_mvc'
    },

    session:{
        secret: 'cJ3nCrYp7i0n',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    },

}

module.exports = config;