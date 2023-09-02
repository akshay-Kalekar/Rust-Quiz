// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const body = req.body
  console.log(body);
  const quizQuestion = {
    Question: body.Question,
    Options: {
      a: body.a,
      b: body.b,
      c: body.c,
      d: body.d,
    },
    Answer: body.Answer,
  };
  const client = await clientPromise;
  const db = await client.db("quiz"); 
  console.log(db);
    switch(req.method){
      case "POST":
        let addQuestion = await db.collection("RustQues").insertOne(quizQuestion);
        res.json({status :200 , data: addQuestion})
        break;
        case "GET":
          const viewQuestions = await db.collection("RustQues").find({}).toArray();   
          console.log("ques",viewQuestions);      
          res.json({ status: 200, data: viewQuestions });
          break;
    }   
  
}
