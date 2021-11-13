const {
  list,
  create,
  del,
  update,
  find,
  one
} = require("../services/notesCrud/notesCrud.js");

const notesController = async (req, res)=>{
  const {form, id} = req.body;
  console.log(req.body)

  switch (req.method) {
    case "POST":
      console.log(form);
      res.json(await create(form));
    break;
    case "GET":
    console.log(req.params.name)
      if (req.params.id !== undefined) {
          res.json(await one(req.params.id));
      }
      else if (req.params.name !== undefined) {
        res.json((await find(req.params.name)));
      }
      else{
        res.json(await list());
      }

    break;

    case "PUT":
      res.json(await update(form, id))
    break;

    case "DELETE":
      res.json(await del(req.params.id));

    break

  }

}


module.exports.notesController = notesController ;


// {
//   form:{
//     nombre:"super editado",
//     nota1:100,
//     nota2:100,
//     nota3:100,
//     nota4:100,
//     promedio:100
//   },
//   id:5
// }

//
// {"form":{"nombre":"hey","notas":[100,100,100,100],"promedio":100}}
