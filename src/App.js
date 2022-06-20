import Detail from './components/Detail/Detail';
import Main from './components/Main/Main'


function App() {
  return (
    <div className="App">
      <div className="left">
        <Detail title='Income' />
      </div>
      <div className="center">
        <Main title={'Expense Tracker'} subtitle={'Powered by denscholar'} />
      </div>
      <div className="right">
        <Detail title='Expense' />
      </div>
    </div>
  );
}

export default App;
