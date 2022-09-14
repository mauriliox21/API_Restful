import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.CONEXAO_BANCO_DADOS)

let db = mongoose.connection;

export default db;