import Translator from "./containers/Translator";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/css/abstracts/global.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="center-basic">Basic UI for Translation (Dev)</h1>
        <Translator></Translator>
      </div>
    </Provider>
  );
}

export default App;
