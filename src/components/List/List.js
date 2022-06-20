import React, { useContext } from 'react';
import { MoneyOff, DeleteOutlineOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './List.css';
import { expenseTrackerContext } from '../../context/context';

const List = () => {

    const { deleteTransaction, transactions } = useContext(expenseTrackerContext);

    const deleteTrans = (id) =>{
        
    }

    return (
        <div className='list-container'>
            {transactions.map((transaction) => (
                <div className="transaction" key={transaction.id}>
                    <div className="avatar">
                        <Avatar style={ transaction.type === 'Income' ? {
                            background: 'green',
                        } : {
                            background: 'red',
                        }}>
                            <MoneyOff />
                        </Avatar>
                    </div>
                    <div className="content">
                        <h3>{transaction.category}</h3>
                        <p>${transaction.amount} - {transaction.date.toString()}</p>
                    </div>
                    <div className="delete">
                        <DeleteOutlineOutlined onClick={() => deleteTransaction(transaction.id) } />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List