import { useContext } from 'react';
import { expenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories}  from './constants/categories';


const useTransactions = (title) =>{
    resetCategories();

    const { transactions } = useContext(expenseTrackerContext);
    const transType = transactions.filter((t) => t.type === title);

    const total = transType.reduce((acc, currValue) => acc += currValue.amount, 0);

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if(category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((f) => f.amount),
            backgroundColor: filteredCategories.map((f) => f.color),
        }],
        labels: filteredCategories.map((f) => f.color)

    }

    return { total, chartData }
}

export default useTransactions;