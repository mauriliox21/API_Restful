import { factory } from "factory-girl";
import { faker } from "@faker-js/faker";
import autores from "../src/models/Autor";

factory.define('autores', autores, {
    nome: faker.name.fullName(),
    nacionalidade: faker.address.country()
});

export default factory;