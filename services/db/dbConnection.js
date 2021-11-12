const  {createConnection} = require("mysql");
const {  mysqlUser,mysqlHost,mysqlPas,database} = require("../../config.js");

const connection = ()=>{
  const con = createConnection({
    host     : mysqlHost,
    user     : mysqlUser,
    password : mysqlPas,
    database:database
  });

  return con;
}


module.exports.connection = connection;
