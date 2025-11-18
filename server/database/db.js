import mongoose from 'mongoose';


 export const connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@todolist.udm4xrw.mongodb.net/?appName=ToDoList`;
    try{
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
    console.log("Database connected succesfully")
    }catch(error){
        console.log("error while connecting with the database ",error.message);
    }
 }

 export default connection;
//  `mongodb+srv://${username}:${password}@todolist.udm4xrw.mongodb.net/?appName=ToDoList`