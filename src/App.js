import React, { Component } from 'react';
import { Cards, Chart, StatePicker } from './Components';
import { fetchByState, fetchData } from './api'
import IndiaTextLogo from './Components/IndiaTextLogo/IndiaTextLogo';
import cx from 'classnames';


import Coronalogo from './images/covid19.svg'




import styles from './App.module.css'

class App extends Component {
    state = {
        data: {},
        State: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        })
    }

    handleStateChange = async (State) => {

        const data = await fetchByState(State)
        this.setState({
            data,
            State: (State == "Total" ? null : State),
        })

    }


    render() {
        const { data, State } = this.state;
        return (
            <div className={styles.container} >
                <div className={styles.imageContainer}>
                    <img className={cx(styles.image, styles.rotate)} src={Coronalogo} alt="CoronaLogo" />
                </div>
                <IndiaTextLogo text={State} />
                <Cards data={data} />
                <StatePicker handleStateChange={this.handleStateChange} />
                <Chart data={data} State={State} />
            </div>
        );
    }
}

export default App;