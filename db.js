const mysql2=require('mysql2/promise');

async function connectDB() {
    const db=await mysql2.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"resume_builder"
    });

    console.log("Connected to MYSQL Database");
    return db;
}

module.exports=connectDB;