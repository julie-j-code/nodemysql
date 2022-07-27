const {createPool} = require('mysql2')

const pool = createPool({
    host:"localhost",
    user: "root",
    password: ""
})

pool.query(`select * from apidb.users`, (err, res)=>{
    return console.log(res)})