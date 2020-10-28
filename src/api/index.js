import axios from 'axios';

const url  = "https://api.covidindiatracker.com/total.json"

 export const fetchData = async () => {
    try{
       
       const {data:{active, confirmed, recovered, deaths}} = await axios.get(url);

    //    const modifiedData = {active, confirmed, recovered, deaths};

    //    return modifiedData;

    return {active,confirmed,recovered,deaths}; 
       

    }
    catch(error){
        console.log(error);
    }
}
