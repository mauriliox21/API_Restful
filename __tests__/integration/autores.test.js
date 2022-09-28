import Request from "supertest";
import app from "../../src/app";
import db from "../../src/config/dbConnect";
import factories from "../factories";
import { faker } from "@faker-js/faker";

describe("Test CRUD authors", () => {

    it("Should be able to find authors", async () => {

        //includes an author so the query returns more than one record
        await Request(app).post('/autores').send({
            "nome": faker.name.fullName(),
            "nacionalidade": faker.address.country
        });

        const res = await Request(app).get('/autores');

        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).length).toBeGreaterThanOrEqual(1);

    })

    it("Should be able shows an specific message when returns 0 records", async () => {
        //deletes all records in collection "autores"
        db.collection("autores").deleteMany();

        const res = await Request(app).get('/autores');

        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).message).toBe("Nenhum autor encontrado!")
    });

    it("Should be able to create author", async () => {
        const res = await Request(app).post('/autores').send({
            "nome": faker.name.fullName(),
            "nacionalidade": faker.address.country
        });

        expect(res.status).toBe(201);
        expect(JSON.parse(res.text)).toHaveProperty("_id")
    });

    it("Should not be able to create an existing author", async () => {
        const objAut = {
            "nome": faker.name.fullName(),
            "nacionalidade": faker.address.country
        };

        //includes an author so the next insert be duplicate 
        await Request(app).post('/autores').send(objAut);
        const res = await Request(app).post('/autores').send(objAut);

        expect(res.status).toBe(500);
        expect(JSON.parse(res.text).message).toBe("este autor já foi cadastrado");
    })

    



    afterAll(() => {
        db.dropDatabase();
    });

});