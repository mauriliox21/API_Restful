import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config({path: process.env.NODE_ENV == "test" ? '.env.test' : '.env'})

mongoose.connect(process.env.CONEXAO_BANCO_DADOS)

let db = mongoose.connection;

export default db;