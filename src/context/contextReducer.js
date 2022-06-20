// what is a reducer? A reducer is an function that takes in the old state and and an action, and returns a new state.

const contextReducer = (state, action) =>{
    let transactions;
    switch(action.type){
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions;

        case 'DELETE_TRANSACTION':
            transactions = state.filter((item) => item.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions;

        default:
            return state;
            
    }

}


export default contextReducer;