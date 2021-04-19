import Translator from "./containers/Translator";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Translator></Translator>
      </div>
    </Provider>
  );
}

export default App;
