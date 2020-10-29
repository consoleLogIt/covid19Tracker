import React, { Component } from 'react';
import {Cards,Chart,StatePicker} from './Components';
import {fetchByState, fetchData} from './api'

import Coronalogo from './images/covid19.svg'
import IndianFlag from './images/indian-flag.svg'




import styles from './App.module.css'

class App extends Component {
    state = {
         data:{},
         State:"",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        }) 
    }

   handleStateChange = async (State) => {
    
        // const data =  await fetchStateStatus(statecode);
      
       
        const data = await fetchByState(State)
        this.setState({
            data,
            State,
        })
      
      

  }


    render() {
        const {data,State} = this.state;
        return (
            <div className = {styles.container} >
                <div className = {styles.imageContainer}>
                <img className ={styles.image} src = {Coronalogo} alt="CoronaLogo" />
                <img className ={styles.image} src = {IndianFlag} alt="IndianFlag" />
                </div>
               <Cards data = {data} />  
                <StatePicker handleStateChange = {this.handleStateChange} />
               <Chart data = {data} State = {State} /> 
            </div>
        );
    }
}

export default App;