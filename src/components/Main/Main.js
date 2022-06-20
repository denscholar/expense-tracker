import React, { useContext } from 'react';
import Form from '../Form/Form';
import { expenseTrackerContext } from '../../context/context';
import List from '../List/List';
import './Main.css';

const Main = ({title, subtitle}) => {
  const { balance } = useContext(expenseTrackerContext)
  return (
    <div className="w3-panel w3-card w3-white main-card" >
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <h2>Total Balance: ₦{balance}</h2>
        {/* <div className="content">
            <p>Try saying income for N100 for category salary for monday</p>
        </div> */}
        <hr />
        <div className="form">
          <Form/>
        </div>
        <div className="list-item">
          <List/>
        </div>
    </div>
  )
}

export default Main