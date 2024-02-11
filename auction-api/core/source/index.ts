import { createDbContext } from "./context/dbcontext";

createDbContext('mongodb://0.0.0.0:27017/auction')
    .then(async (x) => {
    
        //const accountModel = createAccountModel(x)
        /*const repo = new ModelRepository(accountModel)
        repo.createAsync({
            login: "pivko",
            password: 'yuiop',
            userName: 'Dancer'
        })*/
    })

