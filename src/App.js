import React, { Component } from 'react';
import {Cards,Chart,StatePicker} from './Components';
import {fetchData} from './api'

import styles from './App.module.css'

class App extends Component {
    state = {
         data:{}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        })
        // console.log(data);  

    }

    render() {
        const {data} = this.state;
        return (
            <div className = {styles.container} >
               <Cards data = {data } />  
               {/* {/* <StatePicker /> */}
               <Chart /> 
            </div>
        );
    }
}

export default App;