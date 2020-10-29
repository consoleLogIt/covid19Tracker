import axios from 'axios';


const url  = "https://api.covidindiatracker.com/"

 export const fetchData = async () => {
    try{
       
       const {data:{active, confirmed, recovered, deaths,
         aChanges ,cChanges , dChanges, rChanges}} = await axios.get(`${url}total.json`);

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

export const fetchByState = async (State) => {

  
    try{
       const {data:{statewise}} = await axios.get(`https://api.covid19india.org/data.json`);

     if(State){
         if(State=="Total"){
           return await fetchData();
            
         }
        console.log("inside fetchByStateApi",State)
         const modifieddata = statewise.filter((state)=>{return state.state===State})
         
       const   {active, confirmed, recovered, deaths,
         deltaconfirmed: cChanges,deltadeaths: dChanges,deltarecovered: rChanges} = modifieddata[0];


         
         return {active, confirmed, recovered, deaths, cChanges, dChanges, rChanges};
     }
       return statewise.map((State)=>({
           State:State.state,
           statecode:State.statecode,
       }));

    }
    catch(error){
        console.log(error);
    }
}


//temp fun
// export const fetchStateStatus = async (statecode) => {
//    try{
//     //    const {data:{[statecode]:status}} = await axios.get('https://api.covid19india.org/v4/data.json')
//     const response = await axios.get('https://api.covid19india.org/v4/data.json')

     
//      console.log(response.data  )
      
//     //  return {active,confirmed,recovered,deaths, aChanges, cChanges, dChanges, rChanges}; 

//    }
//    catch(error){
//        console.log(error);

//    }
// }



