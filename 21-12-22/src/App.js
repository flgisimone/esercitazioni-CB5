import './App.css';
import { Button } from "./components/_button/button";
import { Text } from "./components/_text/text";

function App() {
  return (
    <div className="App">
      <Text variant="font-l">Titolo 1</Text>
      <Text variant="font-m">Titolo 2</Text>
      <Text variant="font-s">Titolo 3</Text>
      <Button variant = "primary" onClick = {() => console.log("Sono il bottone con il colore rosso")}>Bottone Variante Primary</Button>
      <Button variant = "secondary" onClick = {() => console.log("Sono il bottone con il colore verde")}>Bottone Variante Secondary</Button>
      <Button variant = "tertiary" onClick = {() => console.log("Sono il bottone con il colore yellow")}>Bottone Variante Tertiary</Button>
    </div> 
  );
}

export default App;
