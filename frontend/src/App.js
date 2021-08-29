import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TranslationPage from "./views/TranslationPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <TranslationPage></TranslationPage>
          </Route>
          <Route path="/translate">
            <TranslationPage></TranslationPage>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
