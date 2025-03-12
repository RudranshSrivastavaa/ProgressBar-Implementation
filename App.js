import logo from './logo.svg';
import './App.css';
import Progress from './Components/Progress';

function App() {
  const bars=[0,5,20,40,50,80,100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value)=> <Progress key={value} progress={value} />)}
    </div>
  );
}

export default App;
