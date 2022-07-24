import { getConnection } from "../db";



async function getAccount(){
    const query = getAccountQuery()

    console.log(query);

     const result = await getConnection().execute(query);
     return result;
    
}

const getAccountQuery =() => {
    return `SELECT id, account_number, account_balance, account_loan FROM bankacc.account`
}


export {getAccount}