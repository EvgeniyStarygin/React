import "./App.css";
import Filter from "./components/Filter";

const wordsArr = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];

const App = () => {
  return <Filter words={wordsArr}/>;
};

export default App;
