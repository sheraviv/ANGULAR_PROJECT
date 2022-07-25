import { getConnection } from "../db";


async function getVacations(){
    const query = getVacationsQuery()
   
    console.log(query);
    const result = await getConnection().execute(query)
    return result
    
}

const getVacationsQuery = () => {
    return `SELECT id, vacation_name, vacation_price, vacation_date FROM vacations.vations`;

}


export {getVacations}