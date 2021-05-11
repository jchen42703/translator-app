import Translator from "./containers/Translator";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/css/styles.css";

function App() {
  return (
    <Provider store={store}>
      <h1 className="center-basic">Basic UI for Translation (Dev)</h1>
      <Translator></Translator>
    </Provider>
  );
}

export default App;
