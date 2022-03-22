
import './App.css';
import Headers from "./components/Headers/Headers";
import {data} from "./data";
import Card from "./components/Cards/Card";

function App() {
  console.log(data);
  return (
    <div >
        <Headers />
        <Card />
          

    </div>
  );
}

export default App;
