import React, { Component } from 'react';
import {Cards,Chart,StatePicker} from './Components';
import {fetchByState, fetchData} from './api'



import styles from './App.module.css'

class App extends Component {
    state = {
         data:{},
         State:"",
    }

    async componentDidMount() {
        console.log("cdm")
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        }) 
    }

   handleStateChange = async (State) => {
    
        // const data =  await fetchStateStatus(statecode);
      
       
        const data = await fetchByState(State)
        console.log(data)
        this.setState({
            data,
            State,
        })
      
      

  }


    render() {
        const {data,State} = this.state;
        return (
            <div className = {styles.container} >
               <Cards data = {data} />  
                <StatePicker handleStateChange = {this.handleStateChange} />
               <Chart data = {data} State = {State} /> 
            </div>
        );
    }
}

export default App;