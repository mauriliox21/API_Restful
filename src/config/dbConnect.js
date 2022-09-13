import mongoose from "mongoose"

mongoose.connect("mongodb+srv://*****************************.mongodb.net/curso-alura")

let db = mongoose.connection;

export default db;