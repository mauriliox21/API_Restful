import express from "express";
import dotenv from "dotenv"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

dotenv.config({
    path: process.env.NODE_ENV == "test" ? '.env.test' : '.env'
})

db.on("error", console.log.bind(console, 'Erro de conexão com o Banco de Dados'))
db.once("open", () => {
    console.log('Conexão com o Banco de Dados feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

export default app