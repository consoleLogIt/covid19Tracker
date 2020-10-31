import axios from 'axios';


// fetch data for loading page
export const fetchData = async () => {
  try {

    const { data: { active, confirmed, recovered, deaths,aChanges, cChanges, dChanges, rChanges } } = await axios.get(`https://api.covidindiatracker.com/total.json`);

    return { active, confirmed, recovered, deaths, aChanges, cChanges, dChanges, rChanges };

  }
  catch (error) {
    console.log(error);
  }
}

// fetch data for line chart
export const fetchDailyData = async () => {
  try {

    const { data: { cases_time_series } } = await axios.get(url);

    const modifiedData = cases_time_series.map((dailyData) => ({
      confirmed: dailyData.dailyconfirmed,
      deaths: dailyData.dailydeceased,
      recovored: dailyData.dailyrecovered,
      date: dailyData.date
    }))

    return modifiedData;

  }
  catch (error) {
    console.log(error);
  }
}


const url = `https://api.covid19india.org/data.json`;


//fetch data to populate the State list if State arguments is undefined
//fetch data for particular state if State is passed as argument
export const fetchByState = async (State) => {

  try {
    const { data: { statewise } } = await axios.get(url);

    // if State is "Total" (using different api url for total(India) data)
    if (State) {
      if (State === "Total") {
        return await fetchData();
      }
      //filter out the data for the particular state
      const modifieddata = statewise.filter((state) => { return state.state === State })

      const { active, confirmed, recovered, deaths,deltaconfirmed: cChanges, deltadeaths: dChanges, deltarecovered: rChanges } = modifieddata[0];

      return { active, confirmed, recovered, deaths, cChanges, dChanges, rChanges };
    }

    return statewise.map((State) => ({
      State: State.state,
      statecode: State.statecode,
    }));

  }
  catch (error) {
    console.log(error);
  }
}







