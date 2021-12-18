import "../App.css";
import SearchBar from "./SearchBar";
import CountButton from "./CountButton";
//Passing props to components.
function App() {
  return (
    <div className="App">
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
      <CountButton incrementBy={10} />
      <SearchBar />
    </div>
  );
}

export default App;
