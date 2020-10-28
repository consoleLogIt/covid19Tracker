import React, {useEffect,useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchByState, fetchDailyData} from '../../api';

import styles from './StatePicker.module.css';



function StatePicker(props) {
   const [State,setState] = useState([]);

   useEffect(()=>{
      const fetchAPI = async () => {
        setState(await fetchByState());
      } 
      fetchAPI();
   },[setState])


    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect>
                { State.map((state,i)=> <option key ={i} value = {state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default StatePicker;