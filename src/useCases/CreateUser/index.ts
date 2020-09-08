import { MailtrapMailProvier } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresUsersRepository();
const mailrapMailProvider = new MailtrapMailProvier();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase , createUserController }