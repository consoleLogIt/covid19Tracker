import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
// import {Line, Bar} from 'react-chartjs-2';
import { Line, Bar } from '@reactchartjs/react-chart.js'

import styles from './Chart.module.css';

function Chart({ data: { confirmed, active, recovered, deaths }, State }) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();

    }, []);


    // const lineChart = (
    //     dailyData.length
    //     ?
    //     (<Line 
    //     data = {{
    //         labels:dailyData.map(({date})=>date),
    //         datasets: [{
    //              data:dailyData.map(({confirmed})=>confirmed),
    //              label:'confirmed',
    //              borderColor:'#333fff',
    //              fill:true,
    //         },{
    //             data:dailyData.map(({recovored})=>recovored),
    //              label:'recovored',
    //              borderColor:'green',
    //              fill:true,
    //         },{
    //             data:dailyData.map(({deaths})=>deaths),
    //              label:'deceased',
    //              borderColor:'red',
    //              backgroundColor:'rgba(255,0,0,0.5)',
    //              fill:true,
    //         }],

    //     }}
    //     />):null

    // );



    const xlabel = dailyData.map(({ date }) => date.substring(0, 6));
    const lineChart = (

        dailyData.length
            ?
            (<Line
                data={{
                    // lables:dailyData.map(({date})=> date.substring(0,3)),
                    labels: xlabel,
                    datasets: [{
                        label: 'confirmed',
                        data: dailyData.map(({ confirmed }) => confirmed),
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235,0.1)',
                        borderColor: 'rgb(54, 162, 235)',
                    }, {
                        label: 'recovered',
                        data: dailyData.map(({ recovored }) => recovored),
                        fill: true,
                        backgroundColor: 'rgba(0, 255, 0,0.1)',
                        borderColor: 'rgba(0, 255, 0)',
                    }, {
                        label: 'deaths',
                        data: dailyData.map(({ deaths }) => deaths),
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132,0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                    }]
                }}
            />) : null
    )


    const barChart = (
        confirmed
            ? (<Bar
                data=
                {{
                    labels: ['active', 'confirmend', 'recovored', 'deaths'],
                    datasets: [{
                        data: [active, confirmed, recovered, deaths],
                        backgroundColor: [
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(10, 210, 10, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 206, 10, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(50, 192, 45, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,
                    }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current Status of ${State}` }
                }}


            />) : null
    )




    return (
        <div className={styles.container}>
            {State && State != "Total" ? barChart : lineChart}
        </div>
    );
}

export default Chart;