import React, { useState, useContext, useEffect } from 'react';
import { expenseTrackerContext } from '../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import formatDate from '../../utils/formatDate';
import Snackbar from '../Snackbar/Snackbar';
import './Form.css';


const Form = () => {
    const { addTransaction } = useContext(expenseTrackerContext);
    const [formData, setFormData] = useState({});
    const [showSnack, setShowSnack] = useState(false)


    const createTransaction = (e) => {
        e.preventDefault();
        const transactions = ({
            amount: Number(formData.amount),
            category: formData.category,
            date: formatDate(new Date()),
            type: formData.type,
            id: uuidv4(),
        })
        addTransaction(transactions);
        setShowSnack(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowSnack(false)
        }, 5000);
    }, [showSnack])


    const selectCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;


    return (
        <div>
            <div className="speech-detect">
                {showSnack && (<Snackbar closeSnack={() => setShowSnack(false)}  content={'Successfully created'} onclick/>)}
            </div>
            <form className="form-container">
                <div className="form-wrapper">
                    <div className="form-control">
                        <select name="type" id="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                            {/* <option selected disabled>Type</option> */}
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <select name="category" id="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                            {/* <option selected disabled>Category</option> */}
                            {selectCategories.map((c) => (
                                <option key={c.type} value={c.type}>{c.type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Amount' value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                    </div>
                    <div className="form-control">
                        <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                </div>
                <button type='submit' onClick={createTransaction}>CREATE</button>
            </form>
        </div>
    )
}

export default Form