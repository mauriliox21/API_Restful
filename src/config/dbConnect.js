import mongoose from "mongoose"

mongoose.connect("mongodb+srv://cursoAlura:147258@cursoalura.ji82k7f.mongodb.net/curso-alura")

let db = mongoose.connection;

export default db;