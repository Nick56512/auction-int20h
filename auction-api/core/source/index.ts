import { createDbContext } from "./context/dbcontext";
import { createAccountModel } from "./context/modelsFactory";
import { ModelRepository } from "./repositories/modelRepository";

createDbContext('mongodb://0.0.0.0:27017/auction')
    .then(x => {
        const accountModel = createAccountModel(x)
        const repo = new ModelRepository(accountModel)
        repo.createAsync({
            login: "pivko",
            password: 'yuiop',
            userName: 'Dancer'
        })
    })

