import axios from 'axios';

const url  = "https://api.covidindiatracker.com/"

 export const fetchData = async () => {
    try{
       
       const {data:{active, confirmed, recovered, deaths,
         aChanges ,cChanges , dChanges, rChanges}} = await axios.get(`${url}total.json`);
    //    const modifiedData = {active, confirmed, recovered, deaths};

    //    return modifiedData;


    return {active,confirmed,recovered,deaths, aChanges, cChanges, dChanges, rChanges}; 
       

    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{

        const {data:{cases_time_series}} =  await axios.get(`https://api.covid19india.org/data.json`);
      const modifiedData = cases_time_series.map((dailyData)=>({
        confirmed:dailyData.dailyconfirmed,
        deaths:dailyData.dailydeceased,
        recovored:dailyData.dailyrecovered,
       date: dailyData.date
      }))

      return modifiedData;

    }
    catch(error){
        console.log(error);
    }
}




