import "./App.css";
import Search from "./components/Search";
import Watchlater from "./components/watchlater";

function App() {
  return (
    <div className="App">
      <h1>watch later started</h1>
      <Watchlater />
      <h1>watch later ended</h1>
      <Search />
    </div>
  );
}

export default App;
