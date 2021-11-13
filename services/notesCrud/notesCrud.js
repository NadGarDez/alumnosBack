const {connection} = require("../db/dbConnection.js");
const util = require('util');


const list = async ()=>{
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);
  const rows = await query('select * from notes');
  con.end();
  return rows;
}

const one = async (id)=>{
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);
  const rows = await query(`select * from notes WHERE id=${id}`);
  con.end();
  return rows;
}

const find = async (name)=>{
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);

  const rows = await query(`select * from notes WHERE nombre='${name}' OR nombre LIKE '%${name}' OR nombre LIKE '${name}%' OR nombre LIKE '%${name}%'`);

  con.end();
  return rows;
}


const create = async (obj)=>{
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);
  let sql = `INSERT INTO notes (nombre, nota1, nota2, nota3, nota4, promedio, fecha_creacion) VALUES ('${obj.nombre}', ${obj.nota1}, ${obj.nota2}, ${obj.nota3}, ${obj.nota4}, ${obj.promedio}, '${new Date().toISOString()}')`;
  const res = await query(sql);
  console.log(res)
  con.end();
  return res
}


const update = async (obj, id)=>{
  console.log(obj)
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);
  let sql = `UPDATE notes SET nombre= '${obj.nombre}', nota1 = ${obj.nota1}, nota2= ${obj.nota2}, nota3 = ${obj.nota3}, nota4 = ${obj.nota4}, promedio = ${obj.promedio}  WHERE id=${id}`;
  const res = await query(sql);
  console.log(res)
  con.end();
  return res
}


const del = async (id)=>{
  const con = connection();
  con.connect();
  const query = util.promisify(con.query).bind(con);
  let sql = `DELETE FROM notes WHERE id=${id}`;
  const res = await query(sql);
  console.log(res)
  con.end();
  return res
}


module.exports = {
  list:list,
  create:create,
  del:del,
  update:update,
  one:one,
  find:find
}
