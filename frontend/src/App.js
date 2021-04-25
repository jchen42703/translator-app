import Translator from "./containers/Translator";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Basic UI for Translation (Dev)</h1>
        <Translator></Translator>
      </div>
    </Provider>
  );
}

export default App;
