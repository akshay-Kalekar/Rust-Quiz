import clientPromise from "../../lib/mongodb";
// import { useRouter } from 'next/router'
var ObjectId = require('mongodb').ObjectId;

export  default  async function  handler (req, res)  {
  const client = await clientPromise;
  const db = client.db("quiz");

  //objectId is stored in id
  const { query: { id }, method} = req;
  
  switch (method) {
    case "POST":
      let bodyObject = req.body;
      let myPost = await db.collection("RustQues").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
      
      //Get working but how to pass id???
      case "GET":
          const idvRec = await db.collection("Records").find({ "_id":  ObjectId(id) }).toArray();
          console.log("gg",idvRec)
          res.json({ status: 200, data: idvRec });
          break;
   // PUT working but how to pass id???
      case "PUT":
        const editRec = await db.collection("Records").findByIdAndUpdate({ "_id":  ObjectId(id) },req.body).toArray();
        console.log("gg",editRec)
          res.json({ status: 200, data: editRec });
        break;
    //Get working but how to pass id???
    case "DELETE":
      console.log(id);
      const delRec = await db.collection("Records").findOneAndDelete({ "_id":  ObjectId(id) });
      console.log("gg",delRec)
      res.json({ status: 200, data: delRec });
      break;
    }
  }
