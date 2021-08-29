import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import TranslationPage from "./views/TranslationPage";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
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
