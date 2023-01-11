import './App.css';
import Bank from "./components/Bank/Bank"
import Beer from "./components/Beer/Beer"
import Blood_types from "./components/Blood_types/Blood_types"
import Credit_card from "./components/Credit_card/Credit_card"

function App() {
  return (
    <div className="App">
      <Bank />
      <Beer />
      <Blood_types />
      <Credit_card />
    </div>
  );
}

export default App;
