import {Chart, ArcElement} from 'chart.js';
import './Detail.css';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

Chart.register(ArcElement);

function DetailLeft({ title }) {
  
    const { total, chartData } = useTransactions(title);
    return (
        <div className="w3-panel w3-card w3-white detail-card" style={ title === 'Income' ? {
            borderBottom: '5px solid green',
        } : {
            borderBottom: '5px solid red',
        }}>
            <h1 style={title === 'Income' ? {
                color: 'green'
            } : {
                color: 'red'
            }}>{title}</h1>
            <p>₦{total}</p>
            <div className="chart">
                <Doughnut data={chartData} />
            </div>

        </div>
    );
}


export default DetailLeft;