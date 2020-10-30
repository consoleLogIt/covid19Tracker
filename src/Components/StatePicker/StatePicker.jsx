import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchByState } from '../../api';

import styles from './StatePicker.module.css';



function StatePicker({ handleStateChange }) {
    const [State, setState] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setState(await fetchByState());
        }
        fetchAPI();
    }, [setState])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                {State.map((State) => <option key={State.statecode} value={State.State}>{State.State}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default StatePicker;