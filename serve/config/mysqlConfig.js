//mysqlConfig.js
var mysql = require('mysql');
var config = require('./db');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let allServices = {
    query: function (sql, values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
    findUserData: function (name) {
        let _sql = `select * from users where name="${name}";`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
        console.log("snhadlnhdsklfjlksjf;lsjdf"+obj.name)
        let _sql = "insert into user set name="+"'"+obj.name+"'"+",pass="+obj.pass+",phone="+obj.phone
        console.log(_sql)
        // // let _sql =`insert into user set name="${obj.name}"?,pass="${obj.pass}";`
        return allServices.query(_sql, obj)

    },
    login(obj){
        // let _sql = `select * from user where name="'${obj.name}'" AND  pass=${obj.pass}";`
        let _sql = "select * from user where name="+"'"+obj.name +"'"+ "AND" + " pass=" +obj.pass
        // let _sql = "insert into user set name="+"'"+ctx.request.body.name+"'"+",pass="+ctx.request.body.pass
        console.log(_sql);
        return allServices.query(_sql, obj)
    }
}

module.exports = allServices;
