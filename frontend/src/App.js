import Translator from "./containers/Translator";
import "../styles/css/styles.css";
import { FoldButton } from "./containers/FoldBlockButton"; // temp

function App() {
  return (
    <div>
      <h1 className="center-basic">Basic UI for Translation (Dev)</h1>
      <Translator></Translator>
      <FoldButton></FoldButton>
    </div>
  );
}

export default App;
