import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainRoute />
      </Router>
    </Provider>
  );
};

export default App;
